var Web3 = require('Web3');
//var artifactor = require("truffle-artifactor");
 // => a promise

//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi =[
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
    }
  ];
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var Data = web3.eth.contract(abi);

var data = Data.at('0xbf6c0c2f0e48201a38d4b4c31894fb76bbe75b31');


var send_response = data.sendResponse();
send_response.watch(function(error, result){
      if (!error){
        console.log('\n' + "Send Response Triggered" + '\n');
        console.log("Submitter: " + result.args.submitter + '\n' + 'encrypt_type: ' + result.args.encryptType
        	+ "\n" + 'Requests: ' + result.args.req);
      }
  });

var data_submitted = data.dataSubmitted();
data_submitted.watch(function(error, result){
      if (!error){
        console.log('\n' + "Data submitted Triggered" + '\n');
        console.log("Submitter: " + result.args.submitter + '\n' + 'data_type: ' + result.args.data_type
        	+ "\n" + 'Requests: ' + result.args.req);
      }
  });

var no_requests = data.noRequests();
no_requests.watch(function(error, result){
      if (!error){
        console.log('\n' + "No requests Triggered" + '\n');
        console.log("Submitter: " + result.args.submitter);
      }
  });

var data_request = data.dataRequest();
data_request.watch(function(error, result){
      if (!error){
        console.log('\n' + "Data request Triggered" + '\n');
        console.log("Submitter: " + result.args.submitter + '\n' + 'data_type: ' + result.args.data_type
        	+ "\n" + 'encrypt_type: ' + result.args.encrypt_type);
      }
  });



