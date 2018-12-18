const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`https://image.ibb.co/ki9B5R/Screenshot_1.png`);
message.delete();
}

module.exports.help = {
	name: "screech"
}