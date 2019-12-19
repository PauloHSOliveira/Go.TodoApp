import * as yup from 'yup';
import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = yup.object().shape({
            username: yup.string().required(),
            email: yup
                .string()
                .email()
                .required(),
            password: yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failed' });
        }

        const usernameexists = await User.findOne({
            username: req.body.username,
        });
        if (usernameexists) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const emailexists = await User.findOne({ email: req.body.email });
        if (emailexists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const user = await User.create(req.body);

        return res.status(200).json(user);
    }
}

export default new UserController();
