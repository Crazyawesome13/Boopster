const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} has cuffed <@${x.id}>! You're under arrest, pal.`);
message.delete();
}

module.exports.help = {
	name: "cuff"
}