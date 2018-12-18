const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} sits on <@${x.id}>'s lap. They say nothing and <@${x.id}> couldn't care less. Guess they're both accepting of the situation they've found themselves in.`);
message.delete();
}

module.exports.help = {
	name: "siton"
}