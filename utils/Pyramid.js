const cfg = require('../config.json');
const fs = require('fs');
	
function main(client, data, args){
	if(args[2] > 0 && args[3] > 0){
		// Bottom to Top
		for(i=args[2]; i <= args[3]; i++){
			data.channel.send(i);
		}

		// Top to Bottom
		for(i=(args[3]-1); i > (args[2]-1); i--){
			data.channel.send(i);
		}
	}

}

module.exports = main;