const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is starting to get a little handsy with <@${x.id}>. Hope they don't mind..`);
message.delete();
}

module.exports.help = {
	name: "handsy"
}