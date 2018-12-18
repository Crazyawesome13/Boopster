const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let x = message.mentions.users.first() || message.author;
			message.channel.send(`${message.author} slips their hand into <@${x.id}>'s pants. Watch out, <@${x.id}> they're trying to steal your pants. *I think..*`);
			message.delete();
}

module.exports.help = {
	name: "sliphand"
}