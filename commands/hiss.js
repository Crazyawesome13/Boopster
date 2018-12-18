const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} hisses! Very unnatural, they must be a snake-person or something.`);
message.delete();
}

module.exports.help = {
	name: "hiss"
}