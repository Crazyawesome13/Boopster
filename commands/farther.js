const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} reaches a little farther into <@${x.id}> and finds... $${Math.floor(Math.random()*50) + 5}`);
message.delete();
}

module.exports.help = {
	name: "farther"
}