const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} embraces <@${x.id}> in a hug, a long, loving hug.`);
message.delete();
}

module.exports.help = {
	name: "hold"
}