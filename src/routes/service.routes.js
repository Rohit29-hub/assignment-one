import express from "express";

import {
  addService,
  getAllServices,
  updateService,
  deleteService,
} from "../controllers/service.controller.js";

const router = express.Router();

router.route("/add_service").post(addService);
router.route("/get_services").get(getAllServices);
router.route("/update_service/:id").put(updateService);
router.route("/delete_service/:id").delete(deleteService);

export default  router;
