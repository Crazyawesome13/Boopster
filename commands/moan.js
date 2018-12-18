const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} moans, guess they just couldn't help it.`);
message.delete();
}

module.exports.help = {
	name: "moan"
}