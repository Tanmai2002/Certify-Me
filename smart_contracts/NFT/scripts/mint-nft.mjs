const CONTRACT_ADDRESS = "0xca4845E3C4e0e62b1011Ca64E7A9D72F7AD1Ea2B"
const META_DATA_URL = "ipfs://bafyreiesbkaa4bphh3pb2qemhlupb7si457gjz4octoubqulnvejdugq34/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });