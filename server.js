/* Modules */
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

/* Routes */
const vehicle = require("./routes/vehicules");
const secteur = require("./routes/secteurs");
const horaire = require("./routes/horaires");
const itineraire = require("./routes/itineraires");
app.use(express.json());
app.use("/api", vehicle);
app.use("/api", secteur);
app.use("/api", horaire);
app.use("/api", itineraire);

/* Database structures */
const URL = process.env.MONGODB_URL;
mongoose
  .connect(URL, {
    /*
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    */
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Failed to connect");
  });

/* Teste console */
app.get("/", function (req, res) {
  res.send("Welcome to Household Waste Management");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

/* Server */
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
