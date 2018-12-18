const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} gives a hug back to <@${x.id}>! Sweet, Disrespectful, or Sensual? Tune in next time to find out.`);
message.delete();
}

module.exports.help = {
	name: "hugs"
}