const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} puts <@${x.id}> down. Wonder where they took 'em?`);
message.delete();
}

module.exports.help = {
	name: "putdown"
}