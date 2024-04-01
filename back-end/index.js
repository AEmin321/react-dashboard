import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { PORT, MONGO_URL } from "./utils/config.js";
import helmet from "helmet";
import morgan from "morgan";
import logger from "./utils/logger";

import generalRouter from "./controllers/general";
import productsRouter from "./routes/products";
import salesRouter from "./routes/sales";
import managementRouter from "./controllers/managementRouter";

import User from "./models/User";
import { dataUser } from "./data";

/* CONFIGURATION */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/api/general", generalRouter);
app.use("/api/products", productsRouter);
app.use("/api/sales", salesRouter);
app.use("/api/management", managementRouter);

/* MONGOOSE SETUP */
mongoose
  .connect(MONGO_URL)
  .then(() => {
    logger.info("connected to mongo db");
    app.listen(PORT, () => {
      logger.info(`listening to port ${PORT}`);
      User.insertMany(dataUser);
    });
  })
  .catch((error) => logger.error(`${error} occured`));
