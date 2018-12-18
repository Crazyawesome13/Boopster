const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
var rps = [
    "rock",
    "paper",
    "scissors",
    "scissoring",
];
message.channel.send(`${message.author.toString()}, you got ${rps[Math.floor(Math.random() * rps.length)]}!`);
message.channel.send(`<@${x.id}>, you got ${rps[Math.floor(Math.random() * rps.length)]}!`);
message.channel.send(`Who won??`);
        {
            setTimeout(function()
            {
            message.author.lastMessage.delete(message)
            }, 25);
            }
}

module.exports.help = {
	name: "rps"
}