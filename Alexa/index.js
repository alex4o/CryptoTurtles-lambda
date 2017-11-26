var Alexa = require('alexa-sdk');
var Web3 = require('web3');

var APP_ID = "amzn1.ask.skill.d76289fb-2d51-4280-b8bf-a1fbbae401cf"; // TODO replace with your app ID (OPTIONAL).

var abi = [
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
]

var web3 = new Web3(new Web3.providers.HttpProvider('http://35.176.173.98:8545'));
var TurtleData = web3.eth.contract(abi,{gasPrice:'10'});
var data = TurtleData.at('0xae45880430125cac96c71e957979fbe311241eff');

function createTurtle(name){
	
	//var requests = data.updateRequests({from:web3.eth.accounts[0]});
	data.mintTurtle.call(name, 17,18, {from:web3.eth.accounts[0], gas:3000000});
}

function getInfo(name){

	totalTurtles= data.globalTurtles.call();
	for (var i=0; i<=totalTurtles; i++){
		id= data.Turtles.call(i);
		turtleName= data.turtleName.call(id);
		if (name==turtleName){
			return (id);
		}
	}
}

var handlers = {
	//Use LaunchRequest, instead of NewSession if you want to use the one-shot model
	// Alexa, ask [my-skill-invocation-name] to (do something)...
	'LaunchRequest': function () {
		this.attributes.speechOutput = "Welcome to Crypto Turtles";

		this.attributes.repromptSpeech = "What do you want to do with your turtles";

		this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
		this.emit(':responseReady');
	},
	'CreateTurtleIntent': function () {
		var turtleSlot = this.event.request.intent.slots.Name;

		if (turtleSlot && turtleSlot.value) {
			turtleName = turtleSlot.value.toLowerCase();
		}

		createTurtle(turtleName);

		this.attributes.speechOutput = "Turtle " + turtleName + " created!";
		this.attributes.repromptSpeech = "Try saying repeat.";

		this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
		// this.response.cardRenderer("Turtle " + turtleName + " created!", "?");
		this.emit(':responseReady');

	},
	'UseSkillIntent': function() {
		const skill = this.event.request.intent.slots.Skill;

		this.response.speak("Enemy turtle took " + 7 + " damage").listen(this.attributes.repromptSpeech);
	},
	'TestIntent': function() {

		this.response.speak("Test Succeeded").listen(this.attributes.repromptSpeech);

	},
	'InitiateBattleIntent': function() {
		const name = this.event.request.intent.slots.Name;


		this.response.speak("Initiated battle between " + a + " and " + b).listen(this.attributes.repromptSpeech);

	},
	'GetInfoIntent': function(){
		var turtleSlot = this.event.request.intent.slots.Name;
		turtleName = turtleSlot.value.toLowerCase();

		var ID= getInfo(turtleName);

		this.response.speak("Your turtle's ID is" + ID);
	},
	'AMAZON.HelpIntent': function () {
		this.attributes.speechOutput = "You know how to use that";
		this.attributes.repromptSpeech = "You know how to use that";

		this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
		this.emit(':responseReady');
	},
	'AMAZON.RepeatIntent': function () {
		this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
		this.emit(':responseReady');
	},
	'AMAZON.StopIntent': function () {
		this.emit('SessionEndedRequest');
	},
	'AMAZON.CancelIntent': function () {
		this.emit('SessionEndedRequest');
	},
	'SessionEndedRequest': function () {
		console.log(`Session ended: ${this.event.request.reason}`);
	},
	'Unhandled': function () {
		this.attributes.speechOutput = "You can not do that";
		this.attributes.repromptSpeech = "This is impossible";
		this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
		this.emit(':responseReady');
	},
};

exports.handler = function (event, context, callback) {
	const alexa = Alexa.handler(event, context, callback);
	alexa.APP_ID = APP_ID;
	// To enable string internationalization (i18n) features, set a resources object.
	// alexa.resources = text;
	alexa.registerHandlers(handlers);
	alexa.execute();
};