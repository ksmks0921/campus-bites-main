import path from "path";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import swaggerUI from "swagger-ui-express";
import docs from "./docs/index.js";
import colors from 'colors'

import mealRoutes from "./routes/mealRoutes.js";
import modificationRoutes from "./routes/modificationRoutes.js";
import drinkRoutes from "./routes/drinkRoutes.js";
import dishRoutes from "./routes/dishRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";

import cors from "cors";
dotenv.config();

connectDB();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
// create application/json parser

// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use('/api/restaurants', restaurantRoutes)
app.use("/api/meals", mealRoutes);
app.use("/api/drinks", drinkRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/modifications", modificationRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use("/", swaggerUI.serve, swaggerUI.setup(docs));
} else {
  app.use("/", swaggerUI.serve, swaggerUI.setup(docs));
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8090;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
