const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} pulls a puppy out of thin air! This astonishes <@${x.id}> and they ask ${message.author.toString()} to do another. ${message.author.toString()} some how manages to pull ***another*** puppy out of literally no where! Amazing.`);
message.delete();
}

module.exports.help = {
	name: "puppymagic"
}