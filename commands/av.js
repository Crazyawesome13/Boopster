const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            var embed = new Discord.RichEmbed()
            .setAuthor(`${x.username}'s Profile Picture:`)
            .setImage(x.displayAvatarURL)
            .setColor('RANDOM')

message.channel.send(embed)
message.delete();
}

module.exports.help = {
	name: "av"
}