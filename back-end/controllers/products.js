import { Router } from "express";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

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

export default productsRouter;
