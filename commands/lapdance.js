const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} begins to give <@${x.id}> a lap dance in an effort to seduce them, did it work?`);
message.delete();
}

module.exports.help = {
	name: "lapdance"
}