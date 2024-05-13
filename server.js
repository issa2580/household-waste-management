const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", function (req, res) {
  res.send("Welcome to Household Waste Management");
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
