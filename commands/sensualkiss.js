const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} lightly and passionately kisses <@${x.id}>'s neck. A little too publicly if you ask me, but romantic nonetheless.`);
message.delete();
}

module.exports.help = {
	name: "sensualkiss"
}