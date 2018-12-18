const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} punched <@${x.id}> in the arm, but it was out of love.`);
message.delete();
}

module.exports.help = {
	name: "lovetap"
}