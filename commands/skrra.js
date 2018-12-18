const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`the ting go skrra`);
message.delete();
}

module.exports.help = {
	name: "skrra"
}