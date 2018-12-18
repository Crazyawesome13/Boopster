const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`Bippity Boppity ${message.author.toString()} claims <@${x.id}> as their property.`);
message.delete();
}

module.exports.help = {
	name: "bippity"
}