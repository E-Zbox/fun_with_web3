export const basicBuiltinsAbi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "_address",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "_stringArray",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_stringArrayLength",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_stringText",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_uintEight",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "_uintEightArray",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_uintEightArrayLength",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_uintTwoFiveSix",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "_uintTwoFiveSixArray",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_uintTwoFiveSixArrayLength",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "set_address",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_arg",
                type: "string",
            },
        ],
        name: "set_stringArray",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_arg",
                type: "string",
            },
        ],
        name: "set_stringText",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "_arg",
                type: "uint8",
            },
        ],
        name: "set_uintEight",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_arg",
                type: "uint256",
            },
        ],
        name: "set_uintTwoFiveSix",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "_arg",
                type: "uint8",
            },
        ],
        name: "update_uintEightArray",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_arg",
                type: "uint256",
            },
        ],
        name: "update_uintTwoFiveSixArray",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export const intermediateBuiltinsAbi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "_firstName",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "_lastName",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "_age",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "_id",
                type: "uint8",
            },
        ],
        name: "PersonCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "_id",
                type: "uint8",
            },
        ],
        name: "PersonUpdated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_firstName",
                type: "string",
            },
            {
                internalType: "string",
                name: "_lastName",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "_age",
                type: "uint8",
            },
        ],
        name: "createPerson",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        name: "mapStringPerson",
        outputs: [
            {
                internalType: "string",
                name: "_firstName",
                type: "string",
            },
            {
                internalType: "string",
                name: "_lastName",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "_age",
                type: "uint8",
            },
            {
                internalType: "uint8",
                name: "_id",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "persons",
        outputs: [
            {
                internalType: "string",
                name: "_firstName",
                type: "string",
            },
            {
                internalType: "string",
                name: "_lastName",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "_age",
                type: "uint8",
            },
            {
                internalType: "uint8",
                name: "_id",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "personsLength",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_firstName",
                type: "string",
            },
            {
                internalType: "string",
                name: "_lastName",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "_age",
                type: "uint8",
            },
            {
                internalType: "uint8",
                name: "_id",
                type: "uint8",
            },
        ],
        name: "updatePerson",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export const basicBuiltinsContractAddress =
    "0xf632c3eb465BB815Ef3d931cD1566Fd2AdD664d2";

export const intermediateBuiltinsContractAddress =
    "0x33FAcabAD324453769Cb54b09d1Cf1f208ec9980";
