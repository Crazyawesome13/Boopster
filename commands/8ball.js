const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let x = message.mentions.users.first() || message.author;
var Eball = [
    "Yes!",
    "No.",
    "I have no idea..",
    "Maybe..",
    "Uh.. -exit",
    "Most likely.",
    "Probably not.",
    "I'll have to go with a solid 'yes.'",
    "Sorry, I think the answer is No. Unless that's a good thing.. then Congratulations! The answer is No. :)",
];
            if (args[1]) message.channel.send(Eball[Math.floor(Math.random() * Eball.length)]);
             else message.channel.send("Can't read that");
}

module.exports.help = {
	name: "8ball"
}