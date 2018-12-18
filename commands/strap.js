const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} straps <@${x.id}> down, so they can't move.`);
message.delete();
}

module.exports.help = {
	name: "strap"
}