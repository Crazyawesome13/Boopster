const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`Don't stay up all night, it's bad for your health!`);
message.delete();
}

module.exports.help = {
	name: "holland"
}