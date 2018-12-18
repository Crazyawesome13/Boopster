const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} replies with "Nou", the attack is too powerful for your puny mind to comprehend and insanity quickly sets in, you're admitted to a mental institution.`);
message.delete();
}

module.exports.help = {
	name: "nou"
}