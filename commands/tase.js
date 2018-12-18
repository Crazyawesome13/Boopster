const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} tased <@${x.id}>, they're not convulsing on the ground, quite an unpleasant sight.`);
message.delete();
}

module.exports.help = {
	name: "tase"
}