const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`Shh, everyone be quiet, ${message.author.toString()} has decided to take a nap.`);
message.delete();
}

module.exports.help = {
	name: "nap"
}