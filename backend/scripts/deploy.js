const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying contract...");
    
    const YourContract = await ethers.getContractFactory("SupplyChain");
    
    // Change the parameter value each time you deploy
    const initialSupply = Math.floor(Math.random() * 1000); // Random value for demonstration
    const contract = await YourContract.deploy(initialSupply);
    
    await contract.waitForDeployment();
    
    console.log("Contract deployed to:", contract.target);
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error deploying contract:", error);
        process.exit(1);
    });
