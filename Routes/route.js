import express from "express";
import {
  createCake,
  deleteCake,
  getCake,
  getCakeById,
  updateCake,
} from "../Controller/cakeController.js";

const router = express.Router();

router.get("/", getCake);
router.get("/find", getCakeById);
router.post("/create", createCake);
router.put("/update", updateCake);
router.delete("/delete", deleteCake);

export default router;
