const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var compliment = [
    "that they look quite fetching today.",
    "they have an incredible sense of fashion.",
    "they look pretty.",
    "that they're cute.",
    "that they're dapper.",
    "almost as good looking as Faith.",
    "that they're hot.",
    "that they're lookin' fly. A little outdated but valid nonetheless.",
    "that they wish they could add you to their collection. Creepy, but a compliment of sorts, I suppose..",
    "that they would try to come up with a compliment but would fail, thus refrains from doing so.",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} tells <@${x.id}> ${(compliment[Math.floor(Math.random() * compliment.length)]).toString()}`);
message.delete();
}

module.exports.help = {
	name: "compliment"
}