const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} falls asleep on <@${x.id}> in blissful ignorance. Cute, I ship it.`);
message.delete();
}

module.exports.help = {
	name: "sleepon"
}