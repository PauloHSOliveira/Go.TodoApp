import express from 'express';
import mongoose from 'mongoose';
import requireDir from 'require-dir';
import http from 'http';

import routes from './routes';

const app = express();
app.use(express.json());

const server = http.Server(app);
const port = 3000;

mongoose
    .connect('mongodb://localhost:27017/todoList', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then((err, res) => {
        console.log('mongodb connect successfully');
    });

requireDir('./app/models');

app.use('/', routes);

server.listen(port, () => console.log(`Server running on port ${port}`));
