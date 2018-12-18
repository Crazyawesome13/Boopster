const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} rolls their eyes. Very viciously I might add, no need for all the theatrics, really.`);
message.delete();
}

module.exports.help = {
	name: "upseteyeroll"
}