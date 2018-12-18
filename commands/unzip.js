const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} unzips <@${x.id}>'s pants and pulls the underwear out of the way.. uh-oh.`);
message.delete();
}

module.exports.help = {
	name: "unzip"
}