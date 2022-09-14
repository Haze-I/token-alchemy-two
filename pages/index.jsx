import { useState } from "react";

const Home = () => {
  const [contract_one, setContractAddress] = useState("");
  const [address, setCollectionAddress] = useState("");
 


  const getTokenMetadata = async () => {
    console.log("fetching token metadata");
    const api_key = "alchemy api key";
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}`;

    const options = {
      
      method: "POST",
      body: JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "alchemy_getTokenMetadata",
        params: [contract_one],
      }),
    };

    let metadata = await fetch(baseURL, options).then((data) => data.json());

    if (metadata) {
      console.log("metadata:", metadata);
    }
  };


  const getTokenPrice = async () => {
    console.log("Fetching token Price");
    const api_key = "moralis api key";
    const baseURL = `https://deep-index.moralis.io/api/v2/erc20/${address}/price`;

    const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-Key': api_key}};

    let price = await fetch(baseURL, options).then((data) => data.json());

    if (price) {
      console.log("price:", price);
    }
  };

  const getTokenTransfer = async () => {
    console.log("Fetching token Wallet Transfers");
    const api_key =  'moralis api key';
    const baseURL = `https://deep-index.moralis.io/api/v2/${address}/erc20/transfers`;

    const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-Key': api_key}};

    let transfers = await fetch(baseURL, options).then((data) => data.json());

    if (transfers) {
      console.log("transfers:", transfers);
    }
  };

  const getTokenData = async () => {
    console.log("fetching token metadata");
    
    const baseURL = `https://deep-index.moralis.io/api/v2/erc20/metadata`;
    const fetchURL =  `${baseURL}?chain=eth&addresses=${address}`
    const api_key = 'moralis api key'
    const options = {method: 'GET', headers: {accept: 'application/json', 'X-API-Key': api_key}};
    
    const data = await fetch(fetchURL, options).then((data) => data.json());


    if (data) {
      console.log("token data:", data);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input
          onChange={(e) => {
            setContractAddress(e.target.value);
          }}
          value={contract_one}
          type={"text"}
          placeholder="Add a token address"
        ></input>
        <input
          onChange={(e) => {
            setCollectionAddress(e.target.value);
          }}
          value={address}
          type={"text"}
          placeholder="Add a token address"
        ></input>

        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => {
            //getTokenMetadata();
            //getTokenPrice();
            //getTokenTransfer();
            getTokenData();
          }}
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default Home;
