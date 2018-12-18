const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is interrogating <@${x.id}> what juicy secrets will they reveal??`);
message.delete();
}

module.exports.help = {
	name: "interrogate"
}