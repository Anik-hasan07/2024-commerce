import express from "express";

// Importing Routes
import userRoute from "./routes/user.js";
// import productRoute from "./routes/products.js";
// import orderRoute from "./routes/order.js";
// import paymentRoute from "./routes/payment.js";
// import dashboardRoute from "./routes/stats.js";

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

// Using Routes
app.use("/api/v1/user", userRoute);
// app.use("/api/v1/product", productRoute);
// app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/payment", paymentRoute);
// app.use("/api/v1/dashboard", dashboardRoute);

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
