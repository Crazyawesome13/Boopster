const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
                let x = message.mentions.users.first() || message.author;
var dares = [
    "Prank calls your best friend’s boyfriend / crush.",
    "Just Go to the Kitchen and have one tablespoon of Chilli Powder!",
    "Sing nursery rhymes with actions",
    "Make a Turban with Toilet paper and Click a selfie!",
    "Exchange a clothing item with the player on your left.",
    "Put an ice cube down to your pants and keep it there till it melts.",
    "Mix up different types of sauces and eat. What do you get now?",
    "Use your teeth to get someone’s socks off..",
    "Take your shirt/bikini off for 10 seconds.",
    "Let someone shave a any part of your body.",
    "Poke someone with f**k you text whom you don’t know on fb.",
    "Allow another player to do whatever with you video game account for 5 minutes.",
    "What is that one thing you never wish to tell to anyone?",
];
message.channel.send(`${message.author.toString()} chose ***DARE***`);
            args[1]; message.channel.send(dares[Math.floor(Math.random() * dares.length)]);
            {
                setTimeout(function()
                {
                message.author.lastMessage.delete(message)
                }, 25);
                }
}

module.exports.help = {
	name: "dare"
}