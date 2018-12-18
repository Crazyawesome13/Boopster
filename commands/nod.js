const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} nods. Whether in agreement, confirmation, or some other form of nod is to be determined, but I do know they nodded.`);
message.delete();
}

module.exports.help = {
	name: "nod"
}