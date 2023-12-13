import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        title: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: Array, required: true },
        price: { type: Number, required: true },
      },
    ],
    paymentMethod: {
      type: String,
      required: true,
    },
   
    estimatedTax: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalQuantity: {
      type: Number,
      default: 0.0,
    },
    TotalShoppingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Not Delivered"],
      default: "Pending",
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
