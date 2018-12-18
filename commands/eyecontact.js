const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author} decides to make eye contact with <@${x.id}>, the reasoning has yet to be determined.`);
message.delete();
}

module.exports.help = {
	name: "eyecontact"
}