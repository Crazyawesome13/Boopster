const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.content.toString().slice(message).replace("-simon", "")}`);
            {
                setTimeout(function()
                {
                   message.author.lastMessage.delete(message)
                }, 0);
                }
}

module.exports.help = {
	name: "simon"
}