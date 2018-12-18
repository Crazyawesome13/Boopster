const Discord = require("discord.js");
const money = require('discord-money');

module.exports.run = async (bot, message, args) => {
    let x = message.mentions.users.first() || message.author;
    const talkedRecently = new Set();
message.delete();

if(message.content.startsWith("-pickpocket bal")) {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("You need to wait before you can use that command again.");
    } else {
          
var pocket = [
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
    "mega seeds? up their ass?",
    "..Faith?",
    "a green inter-dimensional portal gun.",
    "a pickle! It talks?? I think it's an alcoholic..",
    "a boy named Morty!",
    "an old man named Rick!",
    "a butterfly knife.",
    "what appears to be a diagram of the female genitalia?",
    "a guide on faking the female orgasm.",
    "a frozen hotdog in a plastic baggy?",
    "an old trading card worth 2 times the cash they had in their pocket!",
    "a pocket dimension..",
    "the entire North Korean population.",
    "a pair of handcuffs... wait a minute.. you just pickpocketed a cop!",
    "a pair of fuzzy handcuffs. Uh..",
    "isn't removing their hand..",
    "a.. willy willy?",
];
let money = Math.floor(Math.random()*1000) + 5;
let currentbal = money.fetchBal(message.author.id);
message.channel.send(`${message.author.toString()} stole $${money} from <@${x.id}>!`);
            message.channel.send(`and ${pocket[Math.floor(Math.random() * pocket.length)]}`);
            money.updateBal(message.author.id, currentbal + money);
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
} else {
var pocket = [
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
    "mega seeds? up their ass?",
    "..Faith?",
    "a green inter-dimensional portal gun.",
    "a pickle! It talks?? I think it's an alcoholic..",
    "a boy named Morty!",
    "an old man named Rick!",
    "a butterfly knife.",
    "what appears to be a diagram of the female genitalia?",
    "a guide on faking the female orgasm.",
    "a frozen hotdog in a plastic baggy?",
    "an old trading card worth 2 times the cash they had in their pocket!",
    "a pocket dimension..",
    "the entire North Korean population.",
    "a pair of handcuffs... wait a minute.. you just pickpocketed a cop!",
    "a pair of fuzzy handcuffs. Uh..",
    "isn't removing their hand..",
    "a.. willy willy?",
];
let money = Math.floor(Math.random()*1000) + 5;
message.channel.send(`${message.author.toString()} stole $${money} from <@${x.id}>!`);
            message.channel.send(`and ${pocket[Math.floor(Math.random() * pocket.length)]}`);
}
}

module.exports.help = {
	name: "pickpocket"
}