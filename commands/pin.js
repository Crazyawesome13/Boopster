const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} pins <@${x.id}> by their wrists to a nearby surface.. Anyone else think it's getting a little hot in here?`);
message.delete();
}

module.exports.help = {
	name: "pin"
}