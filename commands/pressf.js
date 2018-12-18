const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} paid their respects to <@${x.id}>. Rest in peace.`);
message.delete();
}

module.exports.help = {
	name: "pressf"
}