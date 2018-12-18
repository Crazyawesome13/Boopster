module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author} bips <@${x.id}>! Clearly playing on an entirely different level.`);
message.delete();
}

module.exports.help = {
	name: "bip"
}