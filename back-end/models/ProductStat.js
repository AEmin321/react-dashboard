import mongoose from "mongoose";

const productStatSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyDate: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyDate: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", productStatSchema);
export default ProductStat;
