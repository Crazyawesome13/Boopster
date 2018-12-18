const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            message.mentions.members.first().send(`${message.author.toString()} says "I love you". Cute.`);
message.delete();
}

module.exports.help = {
	name: "ily"
}