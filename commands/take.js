const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} takes <@${x.id}>. Now whether that means takes away or takes to or takes their virginity is up for interpretation, but personally I like to imagine it's "${message.author.toString()} takes <@${x.id}> away to a magical land far far away from where ever they happen to be at this time" but that's just me.`);
message.delete();
}

module.exports.help = {
	name: "take"
}