const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} kisses <@${x.id}> further than a little lower than the neck... 
Is it even considered kissing at this point?`);
message.delete();
}

module.exports.help = {
	name: "kisslowerer"
}