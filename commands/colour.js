const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
        var embed = new Discord.RichEmbed()
                .setTitle(`#${color}`)
                .setColor(`#${color}`);
           let x = message.mentions.users.first() || message.author;
message.channel.send({embed: embed});
                  {
                      setTimeout(function()
                      {
                         message.author.lastMessage.delete(message)
                      }, 25);
                      }
}

module.exports.help = {
	name: "colour"
}