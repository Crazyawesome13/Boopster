const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} puts <@${x.id}>'s collar on.`);
message.delete();
}

module.exports.help = {
	name: "collar"
}