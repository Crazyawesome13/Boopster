const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} has adopted <@${x.id}>! Congratulations, <@${x.id}>, you're no longer an orphan!`);
message.delete();
}

module.exports.help = {
	name: "adopt"
}