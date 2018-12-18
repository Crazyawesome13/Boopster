const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} takes the nearest exit, glacing back toward <@${x.id}> for a moment, and then proceeds to leave.`);
message.delete();
}

module.exports.help = {
	name: "exit"
}