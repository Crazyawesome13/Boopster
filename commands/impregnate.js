const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var gender = [
    "a boy",
    "a girl",
    "an apache helicopter",
    "Faith",
    "an entitled jerk",
    "a full grown person",
    "the cutest baby you've ever darn seen",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} impregnates <@${x.id}>. Congratulations, it's ${(gender[Math.floor(Math.random() * gender.length)]).toString()}!`);
message.delete();
}

module.exports.help = {
	name: "impregnate"
}