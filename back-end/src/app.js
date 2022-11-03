if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");


const reviewsRouter = require("./reviews/reviews.router");
// const notFound = require("./utils/errors/notFound");
// const errorHandler = require("./utils/errors/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/reviews", reviewsRouter);


// app.use(notFound);
// app.use(errorHandler);

module.exports = app;