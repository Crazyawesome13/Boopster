const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is A Foolish Klutz.

Wait.. no, they're Away From Keyboard.`);
message.delete();
}

module.exports.help = {
	name: "afk"
}