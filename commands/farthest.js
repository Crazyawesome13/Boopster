const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	var farthest = [
    "decided to go commando today.. *care to reach around a little more*?",
    "chose to wear undergarments today, lucky them. Though, that's a relative term.",
    "wasn't wearing pants with pockets, in fact, they didn't have pants on at all!",
    "wasn't wearing pants with pockets.",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} reaches the farthest they've ever reached, deep into <@${x.id}>'s pockets, coincidentally going straight through the pocket, it just so happens that <@${x.id}> ${(farthest[Math.floor(Math.random() * farthest.length)]).toString()}`);
message.delete();
}

module.exports.help = {
	name: "farthest"
}