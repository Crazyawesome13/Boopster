const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author} lifts <@${x.id}>'s chin, making stern eye contact. You do something wrong or they just like your eyes, <@${x.id}>?`);
message.delete();
}

module.exports.help = {
	name: "liftchin"
}