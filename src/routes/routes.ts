//#region Router
import {Router} from 'express';
const routes = Router();
//#endregion

//#region User Routes
import { UserReadAllController } from '../controllers/User/readall';
import { UserCreateController } from '../controllers/User/create';
import { UserReadController } from '../controllers/User/read';
import { UserUpdateController } from '../controllers/User/update';
import { UserDeleteController } from '../controllers/User/delete';

routes.get("/users", new UserReadAllController().handle);
routes.post("/users", new UserCreateController().handle);
routes.get("/users/:id", new UserReadController().handle);
routes.put("/users/:id", new UserUpdateController().handle);
routes.delete("/users/:id", new UserDeleteController().handle);
//#endregion

export default routes;