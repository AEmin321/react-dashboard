import { Router } from "express";
import OverallStat from "../models/OverallStat";

const salesRouter = Router();

salesRouter.get("/stats", async (request, response) => {
  try {
    const stats = await OverallStat.find();

    response.status(200).json(stats[0]);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

export default salesRouter;
