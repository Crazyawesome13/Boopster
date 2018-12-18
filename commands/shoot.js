const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} shot <@${x.id}>, they've got a gun!`);
message.delete();
}

module.exports.help = {
	name: "shoot"
}