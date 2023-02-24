export const abi = [
  [
    {
      inputs: [{ internalType: "string", name: "_greeting", type: "string" }],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "greet",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "_newGreeting", type: "string" },
      ],
      name: "setGreeting",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
];