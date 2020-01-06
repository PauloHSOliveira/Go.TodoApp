import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ListController from './app/controllers/ListController';

const routes = Router();

routes.post('/register', UserController.store);
routes.post('/login', SessionController.login);

routes.post('/newlist', ListController.store);
routes.get('/lists', ListController.index);
routes.get('/list', ListController.indexOne);
routes.delete('/list', ListController.delete);

export default routes;
