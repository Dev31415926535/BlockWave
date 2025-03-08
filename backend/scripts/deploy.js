const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying contract...");
    
    // 1. Get contract factory
    const YourContract = await ethers.getContractFactory("SupplyChain");
    
    // 2. Deploy contract
    const contract = await YourContract.deploy();
    
    // 3. Wait for deployment confirmation
    await contract.waitForDeployment();
    
    // 4. Get deployment address using .target property
    console.log("Contract deployed to:", contract.target);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Error deploying contract:", error);
      process.exit(1);
    });
  