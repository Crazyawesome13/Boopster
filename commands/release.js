const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} has released <@${x.id}> from their cell.`);
message.delete();
}

module.exports.help = {
	name: "release"
}