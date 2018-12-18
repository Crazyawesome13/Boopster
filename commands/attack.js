const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} snek attacks <@${x.id}> from the bushes tackling them to the ground.`);
message.delete();
}

module.exports.help = {
	name: "attack"
}