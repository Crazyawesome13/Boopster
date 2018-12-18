const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            message.mentions.members.first().send(`${message.author.toString()} says "I love you too". Cute(r).`);
message.delete();
}

module.exports.help = {
	name: "ily2"
}