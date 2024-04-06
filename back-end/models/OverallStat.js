import mongoose, { Schema } from "mongoose";

const overallStatSchema = new mongoose.Schema(
  {
    totalCustomers: Number,
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
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", overallStatSchema);
export default OverallStat;
