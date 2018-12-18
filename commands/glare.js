const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} glares at <@${x.id}> with a look that could kill.`);
message.delete();
}

module.exports.help = {
	name: "glare"
}