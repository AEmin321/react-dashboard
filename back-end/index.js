const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./utils/config");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./utils/logger");
const generalRouter = require("./routes/general");
const productsRouter = require("./routes/products");
const salesRouter = require("./routes/sales");
const managementRouter = require("./routes/management");

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
  .connect(config.MONGO_URL)
  .then(() => {
    logger.info("connected to mongo db");
    app.listen(config.PORT, () =>
      logger.info(`listening to port ${config.PORT}`)
    );
  })
  .catch((error) => logger.error(`${error} occured`));
