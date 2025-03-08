import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractABI = require("../contractABI.json");

const contract = new ethers.Contract(contractAddress, contractABI, provider);

export default contract;
