const express = require('express');
const { ethers } = require("ethers");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractABI = require("./artifacts/contracts/SupplyChain.sol/SupplyChain.json").abi;
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Create Product
app.post("/createProduct", async (req, res) => {
  const { name, manufacturer, location } = req.body;
  const tx = await contract.createProduct(name, manufacturer, location);
  await tx.wait();
  res.send("Product Created Successfully");
});

// Update Product Status
app.post("/updateProduct", async (req, res) => {
  const { productId, status, location } = req.body;
  const tx = await contract.updateProductStatus(productId, status, location);
  await tx.wait();
  res.send("Product Status Updated");
});

// Get Product Details
app.get("/getProduct/:id", async (req, res) => {
  const product = await contract.getProduct(req.params.id);
  res.send(product);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});