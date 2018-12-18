const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is looking for <@${x.id}>. Uh-oh.. ${message.author.toString()} found them!!`);
message.delete();
}

module.exports.help = {
	name: "find"
}