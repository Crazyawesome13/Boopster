const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} curls up on <@${x.id}>'s lap, and decides they're going to take a nap.`);
message.delete();
}

module.exports.help = {
	name: "curlup"
}