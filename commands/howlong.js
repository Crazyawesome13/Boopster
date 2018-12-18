const Discord = require("discord.js");
const Now = new Date();

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
//message.channel.send(`Your last message was sent at ${message.author.lastMessage.createdTimestamp} and it is ${Now}, the difference is ${}, so it's been ${}, that's how long. `);
message.delete();
}

module.exports.help = {
	name: "howlong"
}