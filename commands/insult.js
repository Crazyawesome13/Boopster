const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let x = message.mentions.users.first() || message.author;
var insults = [
    "You're funny. Funny looking! rekt'd em good.",
    "You suck!",
    "You need to have an IQ of over 200 to understand this insult.",
    "You're pretty. Pretty ugly. Haha!",
    "I know I'm supposed to come up with a randomly generated insult to give to you on behalf of the user above but honestly I don't have the processing power to insult *you* and it takes almost no processing power for me to insult you but even such a small amount seems like a giant waste for you.",
    "You're an ultra."
]; 

message.channel.send(`${message.author.toString()} insulted <@${x.id}> with the following: ${(insults[Math.floor(Math.random() * insults.length)]).toString()}`);
message.delete();
}

module.exports.help = {
	name: "insult"
}