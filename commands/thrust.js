const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} is slowly thrusting, in and out of <@${x.id}>, getting faster and more forceful.`);
message.delete();
}

module.exports.help = {
	name: "thrust"
}