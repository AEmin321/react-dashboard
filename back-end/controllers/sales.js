import { Router } from "express";
import OverallStat from "../models/OverallStat.js";

const salesRouter = Router();

salesRouter.get("/overview", async (request, response) => {
  try {
    const stats = await OverallStat.find();

    response.status(200).json(stats[0]);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

export default salesRouter;
