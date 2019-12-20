import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ListController from './app/controllers/ListController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/register', UserController.store);

routes.post('/newlist', ListController.store);
routes.get('/lists', ListController.index);

routes.post('/login', SessionController.login);

export default routes;
