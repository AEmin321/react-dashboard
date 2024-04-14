import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { PORT, MONGO_URL } from "./utils/config.js";
import helmet from "helmet";
import morgan from "morgan";
import { info, error } from "./utils/logger.js";

import generalRouter from "./controllers/general.js";
import productsRouter from "./controllers/products.js";
import salesRouter from "./controllers/sales.js";

import User from "./models/User.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import ProductStat from "./models/ProductStat.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data.js";

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
app.use("/api/client", productsRouter);
app.use("/api/sales", salesRouter);

/* MONGOOSE SETUP */
mongoose
  .connect(MONGO_URL)
  .then(() => {
    info("connected to mongo db");
    app.listen(PORT, () => {
      info(`listening to port ${PORT}`);
    });
  })
  .catch((error) => error(`${error} occured`));
