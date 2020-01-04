import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ListControler from './app/controllers/ListController';

const routes = Router();

routes.post('/register', UserController.store);
routes.post('/login', SessionController.login);

routes.post('/newlist', ListControler.store);
routes.get('/lists', ListControler.index);

export default routes;
