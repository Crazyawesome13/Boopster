const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} grips <@${x.id}>'s ass a little more firmly.`);
message.delete();
}

module.exports.help = {
	name: "grip"
}