import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        collection: 'Users',
    }
);

UserSchema.pre('save', async function hashPassword(next) {
    if (!this.isModified('password')) next();

    this.password = await bcrypt.hashSync(this.password, 10);
});

UserSchema.methods = {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    },
};

export default mongoose.model('User', UserSchema);
