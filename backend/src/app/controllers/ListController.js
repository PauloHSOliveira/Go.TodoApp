import * as yup from 'yup';

import List from '../models/List';

class ListController {
    async store(req, res) {
        const schema = yup.object().shape({
            name: yup.string().required(),
            initDate: yup.string().required(),
            endDate: yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation failed' });
        }

        const { user_id } = req.headers;
        const { name, tasks, initDate, endDate, color } = req.body;

        const list = await List.create({
            name,
            tasks,
            initDate,
            endDate,
            color,
            owner: user_id,
        });

        return res.status(200).json(list);
    }

    async index(req, res) {
        const { user_id } = req.headers;

        const list = await List.find({ owner: user_id });
        if (!list) {
            return res.status(400).json({ error: 'the user has no lists' });
        }

        return res.status(200).json(list);
    }

    async indexOne(req, res) {
        const { id } = req.headers;

        const list = await List.findById(id);

        return res.status(200).json(list);
    }

    async delete(req, res) {
        const { id } = req.headers;

        const list = await List.findByIdAndDelete(id);

        return res.status(200).json(list);
    }
}

export default new ListController();
