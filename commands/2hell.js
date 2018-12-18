const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} sends <@${x.id}> to the depths down under. Now whether that means hell or into someone's pants is up for interpretation.`);
message.delete();
}

module.exports.help = {
	name: "2hell"
}