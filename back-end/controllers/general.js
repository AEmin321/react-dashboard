import { Router } from "express";
import User from "../models/User.js";
import getCountryISO3 from "country-iso-2-to-3";

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

generalRouter.get("/users", async (request, response) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");

    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

generalRouter.get("/geography", async (request, response) => {
  try {
    const users = await User.find();
    const countiresISO3 = users.reduce((count, { country }) => {
      const ISO3Country = getCountryISO3(country);
      if (!count[ISO3Country]) {
        count[ISO3Country] = 0;
      }
      count[ISO3Country]++;
      return count;
    }, {});
    const mappedCountries = Object.entries(countiresISO3).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    response.status(200).json(mappedCountries);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

generalRouter.get("/admins", async (request, response) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");

    response.status(200).json(admins);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

export default generalRouter;
