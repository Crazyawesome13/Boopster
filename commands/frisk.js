const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var frisk = [
    "an intact.. chocolate chip cookie, delicious.",
    "an entire.. puppy??",
    "a.. half eaten corn dog?",
    "a.. severed finger? o.o",
    "a.. vibrator that happens to be on?",
    "their heart",
    "a.. few condoms?",
    "an entire.. pepperoni pizza? How?",
    "what appears to be a diagram of the male genitalia?",
    "a guide on how to be gay.",
    "a little person??",
    "a butterfly knife.",
    "what appears to be a diagram of the female genitalia?",
    "a guide on faking the female orgasm.",
    "a frozen hotdog in a plastic baggy?",
    "an old trading card worth 2 times the cash they had in their pocket!",
    "a pocket dimension..",
    "the entire North Korean population.",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} is frisking <@${x.id}> and they've found.. ${frisk[Math.floor(Math.random() * frisk.length)]}`);
message.delete();
}

module.exports.help = {
	name: "frisk"
}