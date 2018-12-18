const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} left <@${x.id}> to get a pack of cigarettes and never came back.`);
message.delete();
}

module.exports.help = {
	name: "leave"
}