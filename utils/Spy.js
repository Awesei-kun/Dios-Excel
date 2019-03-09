const cfg = require('../config.json');
const fs = require('fs');
	
function main(client, data, messages){
	let msg = {
		"from":data.author.username,
		"server":data.guild.name,
		"channel":data.channel.name,
		"data":data.content
	};
	messages.push(msg);
}

function log(messages){
	for(i=0; i <= messages.length; i++){
		JSON.stringify(messages);
		// Unfinished
	}
}

module.exports = {
    main,
    log
}
