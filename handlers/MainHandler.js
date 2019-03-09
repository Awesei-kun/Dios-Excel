const cfg = require('../config.json');
const fs = require('fs');
global.messages = [];

function main(client, data){
	if(cmdcheck(data) == true){
		let args = data.content.split(' ');
		
		if(args[1]=="log"){
			// Export unfinished
			require("../utils/Spy.js").log(messages);
		}

	} else {
		// Log the chat for some spying
		require("../utils/Spy.js").main(client, data, messages);
		}
}

function cmdcheck(data){
 	if(data.content.split(' ')[0].startsWith(cfg.prefix)){
 		return true;
 	} else {
 		return false;
 	}
 }

module.exports = main;