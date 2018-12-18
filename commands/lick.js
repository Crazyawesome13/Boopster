const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} licks <@${x.id}>! Eww.. (or not?)`);
message.delete();
}

module.exports.help = {
	name: "lick"
}