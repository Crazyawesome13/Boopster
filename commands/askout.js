const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} asks <@${x.id}> out to dinner or something.`);
message.delete();
}

module.exports.help = {
	name: "askout"
}