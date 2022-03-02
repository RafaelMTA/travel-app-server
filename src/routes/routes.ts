//#region Router
import {Router} from "express";
const routes = Router();
//#endregion

//#region Auth Routes
import { SignInController } from "@controllers/auth/SignIn";
import { SignUpController } from '@controllers/auth/SignUp';

routes.post("/api/signin", new SignInController().handle);
routes.post("/api/signup", new SignUpController().handle);
//#endregion

//#region Auth Middleware
import auth from "@middlewares/auth";

routes.use(auth);
//#endregion

//#region User Routes
import { UserReadAllController } from "@controllers/user/readall";
import { UserCreateController } from "@controllers/user/create";
import { UserReadController } from "@controllers/user/read";
import { UserUpdateController } from "@controllers/user/update";
import { UserDeleteController } from "@controllers/user/delete";

routes.get("/api/users", new UserReadAllController().handle);
routes.post("/api/users", new UserCreateController().handle);
routes.get("/api/users/:id", new UserReadController().handle);
routes.put("/api/users/:id", new UserUpdateController().handle);
routes.delete("/api/users/:id", new UserDeleteController().handle);
//#endregion

//#region Event Routes
import { EventReadAllController } from "@controllers/event/readall";
import { EventCreateController } from "@controllers/event/create";
import { EventReadController } from "@controllers/event/read";
import { EventUpdateController } from "@controllers/event/update";
import { EventDeleteController } from "@controllers/event/delete";

routes.get("/api/event", new EventReadAllController().handle);
routes.post("/api/event", new EventCreateController().handle);
routes.get("/api/event/:event_id", new EventReadController().handle);
routes.put("/api/event/:event_id", new EventUpdateController().handle);
routes.delete("/api/event/:event_id", new EventDeleteController().handle);
//#endregion

//#region Transport Routes
import { TransportReadAllController } from "@controllers/transport/readall";
import { TransportCreateController } from "@controllers/transport/create";
import { TransportReadController } from "@controllers/transport/read";
import { TransportUpdateController } from "@controllers/transport/update";
import { TransportDeleteController } from "@controllers/transport/delete";

routes.get("/api/event/:event_id/transport", new TransportReadAllController().handle);
routes.post("/api/event/:event_id/transport", new TransportCreateController().handle);
routes.get("/api/event/:event_id/transport/:transport_id", new TransportReadController().handle);
routes.put("/api/event/:event_id/transport/:transport_id", new TransportUpdateController().handle);
routes.delete("/api/event/:event_id/transport/:transport_id", new TransportDeleteController().handle);
//#endregion

//#region Accommodation Routes
import { AccommodationReadAllController } from "@controllers/accommodation/readall";
import { AccommodationCreateController } from "@controllers/accommodation/create";
import { AccommodationReadController } from "@controllers/accommodation/read";
import { AccommodationUpdateController } from "@controllers/accommodation/update";
import { AccommodationDeleteController } from "@controllers/accommodation/delete";

routes.get("/api/event/:event_id/accommodation", new AccommodationReadAllController().handle);
routes.post("/api/event/:event_id/accommodation", new AccommodationCreateController().handle);
routes.get("/api/event/:event_id/accommodation/:accommodation_id", new AccommodationReadController().handle);
routes.put("/api/event/:event_id/accommodation/:accommodation_id", new AccommodationUpdateController().handle);
routes.delete("/api/event/:event_id/accommodation/:accommodation_id", new AccommodationDeleteController().handle);
//#endregion

//#region Transport Routes
import { ServiceReadAllController } from "@controllers/service/readall";
import { ServiceCreateController } from "@controllers/service/create";
import { ServiceReadController } from "@controllers/service/read";
import { ServiceUpdateController } from "@controllers/service/update";
import { ServiceDeleteController } from "@controllers/service/delete";

routes.get("/api/event/:event_id/service", new ServiceReadAllController().handle);
routes.post("/api/event/:event_id/service", new ServiceCreateController().handle);
routes.get("/api/event/:event_id/service/:service_id", new ServiceReadController().handle);
routes.put("/api/event/:event_id/service/:service_id", new ServiceUpdateController().handle);
routes.delete("/api/event/:event_id/service/:service_id", new ServiceDeleteController().handle);
//#endregion

//#region Pax Routes
import { PaxReadAllController } from "@controllers/pax/readall";
import { PaxCreateController } from "@controllers/pax/create";
import { PaxReadController } from "@controllers/pax/read";
import { PaxUpdateController } from "@controllers/pax/update";
import { PaxDeleteController } from "@controllers/pax/delete";

routes.get("/api/event/:event_id/pax", new PaxReadAllController().handle);
routes.post("/api/event/:event_id/pax", new PaxCreateController().handle);
routes.get("/api/event/:event_id/pax/:pax_id", new PaxReadController().handle);
routes.put("/api/event/:event_id/pax/:pax_id", new PaxUpdateController().handle);
routes.delete("/api/event/:event_id/pax/:pax_id", new PaxDeleteController().handle);
//#endregion

export default routes;