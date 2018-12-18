const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is dying. Anyone wanna save 'em? Wait.. did they mean it figuratively? Shoot, this could be bad.`);
message.delete();
}

module.exports.help = {
	name: "dying"
}