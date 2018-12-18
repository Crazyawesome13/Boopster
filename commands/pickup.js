const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} picks <@${x.id}> up with ease and carries them away.`);
message.delete();
}

module.exports.help = {
	name: "pickup"
}