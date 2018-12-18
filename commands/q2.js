const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            message.mentions.members.first().send(`${message.author.toString()} thinks you're cute too! What should the ship name be??`);
message.delete();
}

module.exports.help = {
	name: "q2"
}