const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} starts pouting and is severely distressed. On the brightside they have a cute pouting-face.`);
message.delete();
}

module.exports.help = {
	name: "pout"
}