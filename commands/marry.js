const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} attempts to marry <@${x.id}>. Are their feelings reciprocated?`);
            {
                setTimeout(function()
                {
                message.author.lastMessage.delete(message)
                }, 25);
                }
}

module.exports.help = {
	name: "marry"
}