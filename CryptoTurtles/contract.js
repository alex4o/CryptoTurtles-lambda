var listen = web3.eth.Contract([{
  "contract_name": "Data",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "data_type",
          "type": "uint256"
        },
        {
          "name": "encrypt_type",
          "type": "uint256"
        }
      ],
      "name": "requestData",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "listeningContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "updateRequests",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "data_type",
          "type": "uint256"
        }
      ],
      "name": "retrieveData",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "coinContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "data_type",
          "type": "uint256"
        }
      ],
      "name": "submitData",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "calculateRequests",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "submitter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "data_type",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "req",
          "type": "uint256"
        }
      ],
      "name": "dataSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "submitter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "encryptType",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "req",
          "type": "uint256"
        }
      ],
      "name": "sendResponse",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "submitter",
          "type": "address"
        }
      ],
      "name": "noRequests",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "submitter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "data_type",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "encrypt_type",
          "type": "uint256"
        }
      ],
      "name": "dataRequest",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b6040516020806106e9833981016040528080519150505b61003c816401000000006105f361004482021704565b505b50610079565b60008054600160a060020a03808416600160a060020a031992831617928390556001805490921692169190911781555b919050565b610661806100886000396000f300606060405236156100675763ffffffff60e060020a60003504166306526c1f811461006c57806316b6370a14610087578063474eebf3146100b65780635bee29b7146100db57806372dd52e3146100f3578063b0e2351814610122578063e8b368691461013a575b600080fd5b341561007757600080fd5b61008560043560243561015f565b005b341561009257600080fd5b61009a6101bd565b604051600160a060020a03909116815260200160405180910390f35b34156100c157600080fd5b6100c96101cc565b60405190815260200160405180910390f35b34156100e657600080fd5b6100856004356102f9565b005b34156100fe57600080fd5b61009a610408565b604051600160a060020a03909116815260200160405180910390f35b341561012d57600080fd5b610085600435610417565b005b341561014557600080fd5b6100c96104ba565b60405190815260200160405180910390f35b7feea72a35e7f3ef0a9623382eb99f01a6d3c3a7e8952ec5c1def4cfe8f70f584f3383836040518084600160a060020a0316600160a060020a03168152602001838152602001828152602001935050505060405180910390a15b5050565b600054600160a060020a031681565b60015460009081908190600160a060020a03166370a0823133836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561022b57600080fd5b6102c65a03f1151561023c57600080fd5b5050506040518051600160a060020a0333166000908152600260205260409020549093506102729150839063ffffffff6105c216565b9050600081106102cb576102b1671bc16d674ec80000825b600160a060020a03331660009081526003602052604090205491900463ffffffff6105d916565b600160a060020a0333166000908152600360205260409020555b600160a060020a0333166000908152600260209081526040808320859055600390915290205492505b505090565b600160a060020a03331660009081526003602052604081205411156103c657600160a060020a03331660009081526003602052604090205461034290600163ffffffff6105c216565b507feedcc44e74c9e00dd64008a82d61f2a3733d23e29618f427d102e993b074caea33826003600033600160a060020a0316600160a060020a03168152602001908152602001600020546040518084600160a060020a0316600160a060020a03168152602001838152602001828152602001935050505060405180910390a1610404565b7f3a0a92c4f88c4cb54c7d36b2242e8c325a1cf162c60f38d7e8b366b85c8b8cfb33604051600160a060020a03909116815260200160405180910390a15b5b50565b600154600160a060020a031681565b600160a060020a03331660009081526003602052604090205461044190600163ffffffff6105d916565b33600160a060020a038116600090815260036020526040908190208390557f0df7fc05a1b8b7b7ed873d87e64b63d9c77264c925a7d05444f7d03fa7c31461928491518084600160a060020a0316600160a060020a03168152602001838152602001828152602001935050505060405180910390a15b50565b600160a060020a0333166000908152600460205260408120548190620189c00143116104e557600080fd5b600154600160a060020a03166370a082313360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561053e57600080fd5b6102c65a03f1151561054f57600080fd5b50505060405180519150506000811061058b57671bc16d674ec80000815b600160a060020a033316600090815260036020526040902091900490555b600160a060020a033316600090815260026020908152604080832084905560048252808320439055600390915290205491505b5090565b6000828211156105ce57fe5b508082035b92915050565b6000828201838110156105e857fe5b8091505b5092915050565b60008054600160a060020a0380841673ffffffffffffffffffffffffffffffffffffffff1992831617928390556001805490921692169190911781555b9190505600a165627a7a72305820ed1ecfad4256d85cf0e516b5ae1ef524e520fa8def69e03c73365a75f03264320029",
  "networks": {
    "1505761945447": {
      "links": {},
      "events": {
        "0x0df7fc05a1b8b7b7ed873d87e64b63d9c77264c925a7d05444f7d03fa7c31461": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "submitter",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "data_type",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "req",
              "type": "uint256"
            }
          ],
          "name": "dataSubmitted",
          "type": "event"
        },
        "0xeedcc44e74c9e00dd64008a82d61f2a3733d23e29618f427d102e993b074caea": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "submitter",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "encryptType",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "req",
              "type": "uint256"
            }
          ],
          "name": "sendResponse",
          "type": "event"
        },
        "0x3a0a92c4f88c4cb54c7d36b2242e8c325a1cf162c60f38d7e8b366b85c8b8cfb": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "submitter",
              "type": "address"
            }
          ],
          "name": "noRequests",
          "type": "event"
        },
        "0xeea72a35e7f3ef0a9623382eb99f01a6d3c3a7e8952ec5c1def4cfe8f70f584f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "submitter",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "data_type",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "encrypt_type",
              "type": "uint256"
            }
          ],
          "name": "dataRequest",
          "type": "event"
        }
      },
      "updated_at": 1505762329730
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1505762329730
}], '')