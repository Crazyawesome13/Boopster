const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
           let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} has decided to remove their hand from <@${x.id}>. Was it a good move to make or have they messed up?`);
message.delete();
}

module.exports.help = {
	name: "removehand"
}