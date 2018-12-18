const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var tattoo = [
    "Allah",
    "a homosexual man",
    "a homosexual woman",
    "the words 'I REPSEK WAMAN'",
    "a phallic member",
    "a tramp stamp",
    "a dragon",
    "a hate symbol",
    "a puppy",
    "Satan",
    "a misspelled Japanese tattoo",
    "INSERTPEPEEMOTE",
    "their own skin colour",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} has tattoed a picture of... ${(tattoo[Math.floor(Math.random() * tattoo.length)]).toString()} onto <@${x.id}>! Do you like it?`);
message.delete();
}

module.exports.help = {
	name: "tattoo"
}