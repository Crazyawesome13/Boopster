const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} claims <@${x.id}> as their daddy. <@${x.id}> is like "ok" and ignores the fact that ${message.author.toString()} is too old for this.`);
message.delete();
}

module.exports.help = {
	name: "daddy"
}