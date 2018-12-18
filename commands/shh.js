const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} puts their finger over <@${x.id}>'s mouth seductively, telling them to 'Shh'`);
message.delete();
}

module.exports.help = {
	name: "shh"
}