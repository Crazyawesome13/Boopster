const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} comforts <@${x.id}> by poking a stick at them and saying "There, there"
${message.author.toString()} gives it a solid "good enough" and leaves <@${x.id}> dazed and confused.`);
message.delete();
}

module.exports.help = {
	name: "comfort"
}