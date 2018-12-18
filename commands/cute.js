const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            message.mentions.members.first().send(`${message.author.toString()} thinks you're cute. You can use -q2 <@user> to retaliate with a "I think you're cute too" or block them, either work.`);
message.delete();
}

module.exports.help = {
	name: "cute"
}