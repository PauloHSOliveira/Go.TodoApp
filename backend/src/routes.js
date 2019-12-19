import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ListController from './app/controllers/ListController';

const routes = Router();

routes.post('/register', UserController.store);

routes.post('/newlist', ListController.store);

export default routes;
