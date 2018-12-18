const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let x = message.mentions.users.first() || message.author;
			message.channel.send(`${message.author} chooses <@${x.id}> as their god(dess).`);
			message.delete();
}

module.exports.help = {
	name: "worship"
}