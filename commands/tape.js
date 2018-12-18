const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} tied <@${x.id}> up with duct-tape. Strange...`);
message.delete();
}

module.exports.help = {
	name: "tape"
}