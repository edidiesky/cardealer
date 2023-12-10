import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import cookie from "cookie-parser";
dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler.js";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookie());
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";

import uploadRoute from "./routes/uploadRoute.js";
import orderRoute from "./routes/orderRoutes.js";

app.use("/api/v1/product", productRoute);
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/upload", uploadRoute);
const __dirname = path.resolve();
app.use(
  cors({
    origin: process.env.WEB_ORIGIN,
    methods: ["POST", "PUT", "DELETE", "GET"],
    credentials: true,
  })
);
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "/public/uploads"))
);

// console.log(path.join(__dirname, "/public/uploads"));

mongoose.connect(
  process.env.MONGO_URl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongo has been connected");
  }
);
// production mode process


// Middlewares
app.use(NotFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("server is listening on port 4000");
});
