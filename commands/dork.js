const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} calls <@${x.id}> a dork. Lovingly, of course. Unless they were calling <@${x.id}> a whale penis.. Very easily mistakeable.. huh.`);
message.delete();
}

module.exports.help = {
	name: "dork"
}