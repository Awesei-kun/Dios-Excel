const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./config.json');
client.login(cfg.auth);
// Client setup


client.on('ready', () => {
	// Start log & Userpresence
	console.log('Bot is ready!');
	client.user.setPresence({
        game: {
            name: cfg.motd,
            type: 0
        }
    });
})

client.on('message', (data) => {
	// External Handle
	require("./handlers/MainHandler.js")(client, data)
})