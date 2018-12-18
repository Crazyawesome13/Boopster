const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} performs a flip. Impressive. The question is; where from?`);
message.delete();
}

module.exports.help = {
	name: "flip"
}