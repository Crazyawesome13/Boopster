const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} twerks for <@${x.id}>. What is this? A lap dance copy?`);
message.delete();
}

module.exports.help = {
	name: "twerk"
}