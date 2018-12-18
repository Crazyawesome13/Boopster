const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} wants <@${x.id}>'s full attention. This should be interesting...`);
message.delete();
}

module.exports.help = {
	name: "attention"
}