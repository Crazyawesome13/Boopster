const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} calls 911 after having been assaulted by <@${x.id}>. Sadly they entered 822 by mistake and died or something.`);
message.delete();
}

module.exports.help = {
	name: "911"
}