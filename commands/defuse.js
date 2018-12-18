const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} defuses a bomb that <@${x.id}> planted! Impressive, where did you learn to do that?`);
message.delete();
}

module.exports.help = {
	name: "defuse"
}