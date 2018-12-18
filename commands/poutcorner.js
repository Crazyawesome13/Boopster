const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} starts pouting in the corner, facing the corner, of course.`);
message.delete();
}

module.exports.help = {
	name: "poutcorner"
}