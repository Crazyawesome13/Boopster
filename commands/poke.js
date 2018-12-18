const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} pokes <@${x.id}>.. hm. Wonder what for?`);
message.delete();
}

module.exports.help = {
	name: "poke"
}