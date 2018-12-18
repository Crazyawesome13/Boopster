const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} sits <@${x.id}> down on their lap.`);
message.delete();
}

module.exports.help = {
	name: "putonlap"
}