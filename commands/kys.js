const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} told <@${x.id}> to kill themselves. React with fire to have them banned. ;)`)
message.delete();
}

module.exports.help = {
	name: "kys"
}