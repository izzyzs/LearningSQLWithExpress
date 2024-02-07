import { Router } from "express";
import TutorialController from "../controllers/tutorial.controller";

const router = Router();
const controller = new TutorialController();

router.route("/").get(controller.findAll).post(controller.create).delete(controller.deleteAll);
router.route("/:id").get(controller.findOne).put(controller.update).delete(controller.delete);
router.route("/published").get(controller.findAllPublished);

export default router;