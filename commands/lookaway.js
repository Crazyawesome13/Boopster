const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author} doesn't want to make eye contact.`);
message.delete();
}

module.exports.help = {
	name: "lookaway"
}