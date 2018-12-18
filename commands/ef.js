const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} slips something bigger than a finger into <@${x.id}>..`);
message.delete();
}

module.exports.help = {
	name: "ef"
}