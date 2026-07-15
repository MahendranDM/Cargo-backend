const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


mongoose
  .connect(
    "mongodb://varsha:toby@ac-yxikmiq-shard-00-00.6mkv1sb.mongodb.net:27017,ac-yxikmiq-shard-00-01.6mkv1sb.mongodb.net:27017,ac-yxikmiq-shard-00-02.6mkv1sb.mongodb.net:27017/shippingservice?ssl=true&replicaSet=atlas-4fm5bt-shard-0&authSource=admin&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Default Route
app.get("/", (req, res) => {
  res.send("Shipping Service Management System API");
});

// Test Route
app.get("/test", (req, res) => {
  res.send("Server Working Successfully");
});

/*
========================================
TEAM MEMBER 1 - Cargo Management
========================================

// const cargoRoutes = require("./routes/cargo");
// app.use("/cargo", cargoRoutes);

*/

/*
========================================
TEAM MEMBER 2 - Client Management
========================================

// const clientRoutes = require("./routes/client");
// app.use("/client", clientRoutes);

*/

/*
========================================
TEAM MEMBER 3 - Port Management
========================================

// const portRoutes = require("./routes/port");
// app.use("/port", portRoutes);

*/

// Server
app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});