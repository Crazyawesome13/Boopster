const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} has confirmed <@${x.id}> is in-fact Not Safe For Work.`);
message.delete();
}

module.exports.help = {
	name: "nsfw"
}