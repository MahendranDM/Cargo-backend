const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb://varsha:toby@ac-yxikmiq-shard-00-00.6mkv1sb.mongodb.net:27017,ac-yxikmiq-shard-00-01.6mkv1sb.mongodb.net:27017,ac-yxikmiq-shard-00-02.6mkv1sb.mongodb.net:27017/shippingservice?ssl=true&replicaSet=atlas-4fm5bt-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

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
    businessType: String
  })
);

// Test API
app.get("/test", (request, response) => {
  response.send("Server Working");
});

// View All Client Companies
app.post("/view-client", async (request, response) => {
  const clients = await Client.find();
  response.json(clients);
});

// Add Client Company
app.post("/add-client", async (request, response) => {
  await Client.create(request.body);

  response.json({
    status: "success"
  });
});

// Server
app.listen(3000, () => {
  console.log("Server Started");
});