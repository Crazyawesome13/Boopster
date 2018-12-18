const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} pulls <@${x.id}> to the ground with them. 

That's sort of cute, right??`);
message.delete();
}

module.exports.help = {
	name: "pulldown"
}