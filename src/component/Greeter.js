import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { abi } from "../utils/greeterABI";
import globe from "../img/globe.gif";
import MetaMaskAuth from "./MetaMaskAuth";

const greeterContractABI = abi;
const greeterAddress = "0xfa81A6e1f8651E7564273BB3a97C2B3d4E40d075";
const Greeter = () => {
  const [currentGreeting, setCurrentGreeting] = useState("");
  const [newGreeting, setNewGreeting] = useState("");
  // const [txHash, setTxHash] = useState("");

  //Get current greeting
  useEffect(() => {
    const loadCurrentGreeting = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const greeterContract = new ethers.Contract(
        greeterAddress,
        greeterContractABI,
        provider
      );

      const currentGreeting = await greeterContract.greet();
      setCurrentGreeting(currentGreeting);
    };

    loadCurrentGreeting();
  }, []);

  const handleNewGreetingChange = (e) => {
    setNewGreeting(e.target.value);
  };

  //New greeter message
  const handleSetGreeting = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const greeterContract = new ethers.Contract(
      greeterAddress,
      greeterContractABI,
      signer
    );

    // const setGreetingTx = await greeterContract.setGreeting(newGreeting);
    // // console.log(`Greeting transaction: ${setGreetingTx.hash}`);
    // // setTxHash(setGreetingTx);

    // Update current greeting
    const updatedGreeting = await greeterContract.greet();
    setCurrentGreeting(updatedGreeting);

    // Clear input field
    setNewGreeting("");
  };

  return (
    <div className="text-center grid align-middle justify-center text-white space-y-3 pt-10">
      <div className="flex flex-row align-middle justify-center place-items-center">
        <h1 className="text-4xl italic">Hello World!</h1>
        <img src={globe} className="w-11 pl-2" alt="globe" />
      </div>
      <p className="text-xl font-thin">
        Create a new greeter message that is verifiable on the Goerli tesnet!
      </p>
      <div className="pb-2 flex flex-col">
        <p className="text-xl pb-2">Current greeting: </p>{" "}
        <p className="font-thin">{currentGreeting}</p>
      </div>
      <label className="pb-2">
        Enter A New Greeting:
        <input
          placeholder="Hello Goerli!"
          type="text"
          value={newGreeting}
          onChange={handleNewGreetingChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </label>
      <MetaMaskAuth />
      <button
        onClick={handleSetGreeting}
        className="text-gray-600 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Set greeting
      </button>
    </div>
  );
};

export default Greeter;
