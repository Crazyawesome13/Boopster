const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} sits quietly in the corner refusing to comment on anything occuring at this moment.`);
message.delete();
}

module.exports.help = {
	name: "quiet"
}