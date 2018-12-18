const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author} giggles. What, like one of those anime school girls? Cute, I suppose. 🤷`);
message.delete();
}

module.exports.help = {
	name: "giggle"
}