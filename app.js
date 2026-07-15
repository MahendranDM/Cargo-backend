const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(
    "mongodb://varsha:toby@ac-yxikmiq-shard-00-00.6mkv1sb.mongodb.net:27017,ac-yxikmiq-shard-00-01.6mkv1sb.mongodb.net:27017,ac-yxikmiq-shard-00-02.6mkv1sb.mongodb.net:27017/shippingservice?ssl=true&replicaSet=atlas-4fm5bt-shard-0&authSource=admin&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/*========================================
CLIENT MANAGEMENT
========================================*/

// Client Company Model
const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    companyId: String,
    companyName: String,
    contactPerson: String,
    phoneNumber: String,
    emailAddress: String,
    companyAddress: String,
    city: String,
    country: String,
    gstNumber: String,
    businessType: String,
  })
);

/*========================================
PORT MANAGEMENT
========================================*/

// Port Model
const Port = mongoose.model(
  "Port",
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

/*========================================
COMMON ROUTES
========================================*/

// Home API
app.get("/", (req, res) => {
  res.send("Shipping Service Management System API");
});

// Test API
app.get("/test", (req, res) => {
  res.send("Server Working Successfully");
});

/*========================================
CLIENT APIS
========================================*/

// View All Clients
app.post("/view-client", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
});

// Add Client
app.post("/add-client", async (req, res) => {
  try {
    const client = await Client.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Client Added Successfully",
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
});

/*========================================
PORT APIS
========================================*/

// View All Ports
app.post("/view-port", async (req, res) => {
  try {
    const ports = await Port.find();

    res.status(200).json({
      status: "success",
      data: ports,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
});

// Add Port
app.post("/add-port", async (req, res) => {
  try {
    const port = await Port.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Port Added Successfully",
      data: port,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
});

// Server
app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});