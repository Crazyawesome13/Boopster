const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} reads <@${x.id}> their rights: You have the right to remain silent, anything you say or do will be used against you in a court of law...`);
message.delete();
}

module.exports.help = {
	name: "rights"
}