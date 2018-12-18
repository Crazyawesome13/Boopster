const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var wyr = [
    "Die happy but with very little wealth - OR - Die sad but having been immensely wealthy for the entirety of your life?",
    "Live a limited life-span but with the ability to fly - OR - Never die but with extremely ordinary skills in both life and videogames of any kind?",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} wants a Would You Rather question: ${(wyr[Math.floor(Math.random() * wyr.length)]).toString()}`);
message.delete();
}

module.exports.help = {
	name: "wyr"
}