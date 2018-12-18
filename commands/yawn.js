const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} yawns, stretching with their arms out wide. Don't fall backwards in your chair. Unless you're not in one. Then you're safe.
*For now..*`);
message.delete();
}

module.exports.help = {
	name: "yawn"
}