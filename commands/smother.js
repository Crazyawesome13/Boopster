const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is smothering <@${x.id}> to death! O:`);
message.delete();
}

module.exports.help = {
	name: "smother"
}