var Web3 = require('Web3');
//var artifactor = require("truffle-artifactor");
 // => a promise

//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi =[
 {
      "constant": false,
      "inputs": [
        {
          "name": "claimer",
          "type": "address"
        },
        {
          "name": "turtleId",
          "type": "uint256"
        }
      ],
      "name": "verifyTurtleOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "turtleId",
          "type": "uint256"
        }
      ],
      "name": "transferTurtle",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "contrac",
          "type": "address"
        }
      ],
      "name": "setCommunication",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "parent1",
          "type": "uint256"
        },
        {
          "name": "parent2",
          "type": "uint256"
        }
      ],
      "name": "mintTurtle",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "globalTurtles",
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
      "inputs": [],
      "name": "balanceret",
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
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "TurtleNames",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
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
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "TurtleOwner",
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
          "name": "turtleId",
          "type": "uint256"
        }
      ],
      "name": "turtleName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Turtles",
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
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "turtleCount",
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
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "TurtlesOwned",
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
      "inputs": [],
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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "parent1",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "parent2",
          "type": "uint256"
        }
      ],
      "name": "mintedTurtle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        }
      ],
      "name": "turtleTransfer",
      "type": "event"
    }
  ];
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var TurtleData = web3.eth.contract(abi,{gasPrice:'10'});

var data = TurtleData.at('0x1e42edc82e62a1e5b3a7f5f49dcebbc6cf7b7532');

//var requests = data.updateRequests({from:web3.eth.accounts[0]});
data.mintTurtle('billy1',17,18, {from:web3.eth.accounts[0], gas:3000000});
//var turt = data.globalTurtles.call();
console.log(data.globalTurtles.call());
console.log(data.Turtles.call(3));
console.log(data.turtleName.call(1511784753));

//data.globalTurtles.call();

//console.log(turtle);
//console.log(data.turtleName.call(turtleId, {from:web3.eth.accounts[0]}));

