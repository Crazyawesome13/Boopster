const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} cuts <@${x.id}>'s clothing from their body. Quite a dangerous practise.`);
message.delete();
}

module.exports.help = {
	name: "cutcloth"
}