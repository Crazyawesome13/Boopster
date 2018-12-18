const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} sacrifices themselves to save <@${x.id}>! Will they survive?? Find out next time on whatever show you think this is referencing!`);
message.delete();
}

module.exports.help = {
	name: "sacrifice"
}