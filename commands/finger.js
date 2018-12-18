const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} slips a finger into <@${x.id}>.. getting a little questionable, no?`);
message.delete();
}

module.exports.help = {
	name: "finger"
}