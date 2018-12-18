const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} curls up next to <@${x.id}> and falls asleep.`);
message.delete();
}

module.exports.help = {
	name: "sleepwith"
}