import { NFTStorage, File } from "nft.storage"
import readFile from 'fs/promises'
// import dotenv from 'dotenv'
import { NFTcontractAddress } from "./constants"
import certificate from "../assets/certificate.svg"
import { ethers } from "ethers"
import { NFTabi } from "./NFTContants"
// dotenv.config()

const { VITE_NFT_STORAGE_API_KEY } = import.meta.env

async function storeAsset(sender,receiver,description,path) {
   const client = new NFTStorage({ token: VITE_NFT_STORAGE_API_KEY  })
   const reader = new FileReader();


   const metadata = await client.store({
       name:  `Certificate:${sender}-${receiver}`,
       description: description,
       image: path,
   })
   console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
   return {...metadata,["contract"]:await mintNFT(receiver,NFTcontractAddress,metadata.url)
}}
export default storeAsset;


//    const CONTRACT_ADDRESS = "0xca4845E3C4e0e62b1011Ca64E7A9D72F7AD1Ea2B"
//    const META_DATA_URL = "ipfs://bafyreiesbkaa4bphh3pb2qemhlupb7si457gjz4octoubqulnvejdugq34/metadata.json"
   
   async function mintNFT(toAddress,contractAddress, metaDataURL) {
      const provider=new ethers.BrowserProvider(ethereum);
      const signer=await provider.getSigner();
      const ExampleNFT=new ethers.Contract(NFTcontractAddress,NFTabi,signer)
   
      
      // const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
    //   const [owner] = await ethers.getSigners()
      let res=await ExampleNFT.mintNFT(toAddress, metaDataURL)
      console.log("NFT minted to: ", toAddress,res)
      return res;
   }
   
//    mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
//       .then(() => process.exit(0))
//       .catch((error) => {
//           console.error(error);
//           process.exit(1);
//       });