//imports
const express = require("express");
const mongoose = require("mongoose");
const placeRouter = require("./routes/place.route");
//constants
const PORT = 3333;
const app = express();
//middlewares
app.use(express.json());
//routes
app.use("/place", placeRouter);
//connections
mongoose.connect("mongodb://127.0.0.1:27017/places", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
