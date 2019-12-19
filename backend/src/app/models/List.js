import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        tasks: [],
        initDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: '#fff',
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        createAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        collection: 'Lists',
    }
);

export default mongoose.model('List', ListSchema);
