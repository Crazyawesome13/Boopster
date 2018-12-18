const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} stands up.
You might ask 'Why' but they'll never tell you why.
Unless they do. My bad, then.`);
message.delete();
}

module.exports.help = {
	name: "stand"
}