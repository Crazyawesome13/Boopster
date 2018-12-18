const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} begins unbuttoning <@${x.id}>'s clothing. Consensually, I hope, as does ${message.author.toString()}, presumably.`);
message.delete();
}

module.exports.help = {
	name: "unbutton"
}