const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} shipped <@${x.id}> with ${message.mentions.members.last().toString()}! Is it sailing?`);
message.delete();
}

module.exports.help = {
	name: "ship"
}