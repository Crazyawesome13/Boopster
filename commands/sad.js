const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
  let feelsbadman = bot.emojis.find("name", "feelsbadman");
message.channel.send(`${message.author.toString()} is sad. ${feelsbadman}`);
message.delete();
}

module.exports.help = {
	name: "sad"
}