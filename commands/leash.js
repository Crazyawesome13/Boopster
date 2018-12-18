const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            message.channel.send(`${message.author} leashes <@${x.id}> so they can't get away.`);
message.delete();
}

module.exports.help = {
	name: "leash"
}