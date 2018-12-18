const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} rests their hand on <@${x.id}>'s thigh, gripping lightly, sensually, even. <@${x.id}> blushes slightly.`);
message.delete();
}

module.exports.help = {
	name: "grabthigh"
}