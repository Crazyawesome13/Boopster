const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is lurking in the background, waiting for the right moment to strike. Careful everyone, ${message.author.toString()} is being a creep.`);
message.delete();
}

module.exports.help = {
	name: "lurk"
}