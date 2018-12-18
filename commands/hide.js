const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is hiding from <@${x.id}>. I wonder where they could be..`);
message.delete();
}

module.exports.help = {
	name: "hide"
}