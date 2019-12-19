import express from 'express';
import mongoose from 'mongoose';
import requireDir from 'require-dir';

import routes from './routes';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todoList', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

requireDir('./app/models');

app.use('/', routes);

app.listen(3000);
