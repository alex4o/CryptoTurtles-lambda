var Alexa = require('alexa-sdk');

var APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).

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

		this.attributes.speechOutput = "Turtle " + turtleName + " created!";
		this.attributes.repromptSpeech = "Try saying repeat.";

		this.response.speak(this.attributes.speechOutput).listen(this.attributes.repromptSpeech);
		// this.response.cardRenderer("Turtle " + turtleName + " created!", "?");
		this.emit(':responseReady');

			// let speechOutput = this.t('RECIPE_NOT_FOUND_MESSAGE');
			// const repromptSpeech = this.t('RECIPE_NOT_FOUND_REPROMPT');
			// if (itemName) {
			// 	speechOutput += this.t('RECIPE_NOT_FOUND_WITH_ITEM_NAME', itemName);
			// } else {
			// 	speechOutput += this.t('RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME');
			// }
			// speechOutput += repromptSpeech;

			// this.attributes.speechOutput = speechOutput;
			// this.attributes.repromptSpeech = repromptSpeech;

			// this.response.speak(speechOutput).listen(repromptSpeech);
			// this.emit(':responseReady');
		}
	},
	'UseSkillIntent': function() {
		const skill = this.event.request.intent.slots.Skill;

		this.response.speak("Enymy turtle took " + 7 + " damage").listen(this.attributes.repromptSpeech);



	},
	'BattleIntent': function() {
		const name = this.event.request.intent.slots.Name;


		this.response.speak("Initiated battle between " + a + " and " + b).listen(this.attributes.repromptSpeech);

	},
	'GetInfoIntent': function(){

		this.response.speak("You turtle has 8 hp")
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