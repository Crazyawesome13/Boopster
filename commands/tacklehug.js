const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} just tackled <@${x.id}> but it appears to have been purely out of love.`);
message.delete();
}

module.exports.help = {
	name: "tacklehug"
}