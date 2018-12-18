const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} licks <@${x.id}>, starting at the thighs with light kisses and moving up slowly..`);
message.delete();
}

module.exports.help = {
	name: "licks"
}