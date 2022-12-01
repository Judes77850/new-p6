const express = require("express");
const app = express();
const helmet = require("helmet");
const limiter = require("./middleware/rate-limiter");
const mongoose = require("mongoose");
const sauceRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));


mongoose
  .connect(
    "mongodb+srv://Judes:julien@cluster0.xwkmtjb.mongodb.net/p6?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Champion, connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));


module.exports = app;
