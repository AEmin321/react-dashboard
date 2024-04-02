import { Router } from "express";
import User from "../models/User.js";

const generalRouter = Router();

generalRouter.get("/users/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findById(id);

    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

export default generalRouter;
