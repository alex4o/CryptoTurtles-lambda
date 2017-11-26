pragma solidity ^0.4.11;

import './zeppelin-solidity/contracts/math/SafeMath.sol';
import './FlinnCoin.sol';


contract Data{

	using SafeMath for uint256;

	address public listeningContract;

	FlinnCoin public coinContract;

	mapping(address => uint256) balances;

	mapping(address => uint256) requests;

	mapping(address => uint256) lastChecked;

	event dataSubmitted(address submitter, uint256 data_type, uint256 req);

	event sendResponse(address submitter, uint256 encryptType, uint256 req);

	event noRequests(address submitter);

	event dataRequest(address submitter, uint256 data_type, uint256 encrypt_type);


	function Data(){


	}

	function setCommunication(address contrac) returns (bool){

		listeningContract = contrac;

		coinContract = FlinnCoin(listeningContract);

		return true;

	}


	function calculateRequests() public returns (uint256){

		//use monthly

		require(block.number > lastChecked[msg.sender] + 100800);

		uint256 flinnCoinBalance;

		flinnCoinBalance = coinContract.balanceOf(msg.sender);

		//Needs to multiply by number of months since last checked for the case where users havent made requests in multiple months
		if(flinnCoinBalance >= 0){

			requests[msg.sender] = requests[msg.sender].add(flinnCoinBalance/2000000000000000000);




		}

		balances[msg.sender] = flinnCoinBalance;

		lastChecked[msg.sender] = block.number;

		return requests[msg.sender];




		}
	
	function updateRequests() public returns (uint256){

		//use if new funds are accquired in FlinnCoin

		uint256 flinnCoinBalance;

		uint256 difference;

		flinnCoinBalance = coinContract.balanceOf(msg.sender);

		difference = flinnCoinBalance.sub(balances[msg.sender]);

		//change to require otherwise users can just keep getting new coins
		if(difference >= 0){
	
			requests[msg.sender] = requests[msg.sender].add(difference/2000000000000000000);


		}

		balances[msg.sender] = flinnCoinBalance;

		return requests[msg.sender];



	}
	// can be abused currently needs onlyOwner or decentralised alternative for request issuing.
	//need a good way of doing this, the above means it costs the owner.
	//possible solution is use a detached signature from the owner that is passed as an argument
	function submitData(uint256 data_type) {

		requests[msg.sender] = requests[msg.sender].add(1);

		dataSubmitted(msg.sender, data_type, requests[msg.sender]);



	}


	function retrieveData(uint256 data_type){

		if(requests[msg.sender] > 0){

			requests[msg.sender] = requests[msg.sender].sub(1);

			sendResponse(msg.sender, data_type, requests[msg.sender]);


		}

		else{

			noRequests(msg.sender);



		}


	}

	function requestData(uint256 data_type, uint256 encrypt_type){
		dataRequest(msg.sender, data_type, encrypt_type);


	}

	function balanceret() returns(uint256){
			return coinContract.balanceOf(msg.sender);


	}





}