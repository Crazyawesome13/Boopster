const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`Good job using that test command, ${message.author.toString()}!`);    
message.delete();
}

module.exports.help = {
	name: "test"
}