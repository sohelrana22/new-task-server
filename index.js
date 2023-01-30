const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./Routers/auth");
const billRoute = require("./Routers/bill");

dotenv.config();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

app.use("/api", authRoute);
app.use("/api", billRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});