const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} beats <@${x.id}> till they're black and blue.`);
message.delete();
}

module.exports.help = {
	name: "beat"
}