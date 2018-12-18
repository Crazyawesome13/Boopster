const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`I am!`);
message.channel.send(`I mean.. uh... Hi, Sam!`);
message.channel.send(`Yeah, that's what I mean't..`)
}

module.exports.help = {
	name: "gay"
}