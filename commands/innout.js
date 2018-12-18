const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} moves their finger in and out of <@${x.id}>, starting slow and picking up the pace and force.`);
message.delete();
}

module.exports.help = {
	name: "innout"
}