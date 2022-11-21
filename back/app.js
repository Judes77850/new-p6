const express = require("express");
const mongoose = require("mongoose");
const sauceRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const path = require("path");
const cors = require("cors");
const app = express();
// const rateLimit = require("express-rate-limit");

app.use(cors());

// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })


mongoose
  .connect(
    "mongodb+srv://Judes:julien@cluster0.xwkmtjb.mongodb.net/p6?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Champion, connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
// app.use(rateLimit);

app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
