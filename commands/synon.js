const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`Found it!
http://www.thesaurus.com/browse/${message.content.slice(message).replace("-synon ", "")}`);
message.delete();
}

module.exports.help = {
	name: "synon"
}