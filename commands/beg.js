const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} begs <@${x.id}> for forgiveness. ${message.author.toString()} is literally on their knees.`);
message.delete();
}

module.exports.help = {
	name: "beg"
}