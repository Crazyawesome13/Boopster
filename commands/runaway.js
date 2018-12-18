const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} ran away from <@${x.id}> wonder why..`);
message.delete();
}

module.exports.help = {
	name: "runaway"
}