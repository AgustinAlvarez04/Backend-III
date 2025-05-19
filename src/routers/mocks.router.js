import * as mocksController from "../controller/mocks.controller.js";
import { Router } from "express";

const router = Router();

router.get("/mockingusers", mocksController.createUser);
router.post("/mockingpets", mocksController.createPet);
router.post("/mockingdata", mocksController.createData);


export default router;
