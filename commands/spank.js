const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} has spanked <@${x.id}>! Due to a kink or has someone been a bad boy/girl?`);
message.delete();
}

module.exports.help = {
	name: "spank"
}