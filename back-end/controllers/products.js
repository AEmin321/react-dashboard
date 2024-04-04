import { Router } from "express";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";

const productsRouter = Router();

productsRouter.get("/products", async (request, response) => {
  try {
    const products = await Product.find();
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stats = await ProductStat.find({ productId: product._id });
        return {
          ...product._doc,
          stats,
        };
      })
    );
    response.status(200).json(productsWithStats);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

productsRouter.get("/transactions", async (request, response) => {
  try {
    const { page = 1, pageSize = 20, sort = null, search = "" } = request.query;

    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    response.status(200).json({ transactions, total });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

export default productsRouter;
