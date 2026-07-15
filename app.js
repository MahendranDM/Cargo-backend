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

app.get("/", (req, res) => {
  res.send("Shipping Service Management System API");
});

// Test Route
app.get("/test", (req, res) => {
  res.send("Server Working Successfully");
});


const Port = mongoose.model(
  "Ports",
  new mongoose.Schema({
    port_id: String,
    port_name: String,
    port_code: String,
    city: String,
    country: String,
    port_type: String,
    maximum_cargo_capacity: String,
    contact_number: String,
    port_manager: String,
    operational_status: String,
  })
);

app.post("/api/add-port", async (req, res) => {
  try {
    const port = new Port(req.body);
    const result = await port.save();

    res.status(201).json({
      status: "success",
      message: "Port Added Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
});


app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});