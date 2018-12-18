const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`Coming right up!
https://www.urbandictionary.com/define.php?${message.content.slice(message).replace("-urbandict ", "term=").replace(/ /g, "+")}`);
message.delete();
}

module.exports.help = {
	name: "urbandict"
}