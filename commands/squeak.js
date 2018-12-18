const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author} let's out an 'eeep' or something like that. I dunno, they squeaked, ok.`);
message.delete();
}

module.exports.help = {
	name: "squeak"
}