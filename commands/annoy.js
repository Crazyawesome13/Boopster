const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} purposefully tries to annoy <@${x.id}> to the best of their abilities.`);
message.delete();
}

module.exports.help = {
	name: "annoy"
}