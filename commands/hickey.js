const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} applies suction force to <@${x.id}>'s neck causing small blood vessels burst, creating a patch of discoloration`);
message.delete();
}

module.exports.help = {
	name: "hickey"
}