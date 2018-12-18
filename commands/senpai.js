const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} has been noticed.`);
            setTimeout(function()
            {
            let x = message.mentions.users.first() || message.author;
message.channel.send("JK.")
            }, 1000);
message.delete();
}

module.exports.help = {
	name: "senpai"
}