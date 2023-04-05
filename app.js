const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
const mediaRoute = require("./routes/api.mediaRoute");
const userRoute = require("./routes/api.userRoute");
const otherTables = require("./routes/api.supportTablesRoute");

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

// middleware
app.use("/api/v1/media", cors(), mediaRoute);
app.use("/api/v1/users", cors(), userRoute);
app.use("/api/v1/", cors(), otherTables);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
