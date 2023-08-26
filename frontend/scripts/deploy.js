const hre = require("hardhat");

async function main() {
  const Auth = await hre.ethers.getContractFactory("AuthContract");
  const auth = await Auth.deploy();

  await auth.deploymentTransaction();

  console.log("Address of contract: ", await auth.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
