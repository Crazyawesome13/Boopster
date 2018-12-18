const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} begins petting <@${x.id}> in an almost carressing fashion. It's a little creepy if you ask me.`);
message.delete();
}

module.exports.help = {
	name: "pet"
}