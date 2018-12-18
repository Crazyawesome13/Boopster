const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`hewwo ${message.mentions.members.first()} dis ish teh FBI, Furry Bulge Inspection agency, coming to awwest u for poswession of an iwwegally big bulgie uwu. Now i will inspwect u. *sniffs and notices ur bulge* owo wats dis? *squeezie ur bulgie* uwu ish sho juicy and big owo`);
message.delete();
}

module.exports.help = {
	name: "fbi"
}