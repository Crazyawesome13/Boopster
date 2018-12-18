const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
const succ = bot.emojis.get("490698672170991636");
message.channel.send(`${message.author.toString()} sucks on <@${x.id}>'s cock. I hope it was consensual. ${succ}`);
message.delete();
}

module.exports.help = {
	name: "succ"
}