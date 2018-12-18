const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} revives <@${x.id}> with their rejuvenating saliva. Gross.`).catch(console.error);
message.delete();
}

module.exports.help = {
	name: "revive"
}