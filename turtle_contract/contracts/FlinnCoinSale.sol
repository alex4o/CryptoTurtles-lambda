pragma solidity ^0.4.11;

import './FlinnCoin.sol';

//import './zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';

import './zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol';

contract FlinnCoinSale is CappedCrowdsale{



  function FlinnCoinSale(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet, uint256 _cap) CappedCrowdsale(_cap)Crowdsale(_startTime, _endTime, _rate, _wallet){
    }

    // creates the token to be sold. 
    // override this method to have crowdsale of a specific mintable token.
    function createTokenContract() internal returns (MintableToken) {
      return new FlinnCoin();
    }

}
