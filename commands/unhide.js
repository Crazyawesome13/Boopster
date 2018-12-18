const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} comes out from their hiding place.`);
message.delete();
}

module.exports.help = {
	name: "unhide"
}