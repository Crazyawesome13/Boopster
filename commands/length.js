const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var length = [
    "ꓭ=D",
    "ꓭ==D",
    "ꓭ===>",
    "ꓭ====D",
    "ꓭ=====D",
    "ꓭ======>",
    "ꓭ=======D",
    "ꓭ========D",
    "ꓭ=========D",
    "ꓭ==========>",
    "ꓭ===========D",
    "ꓭ============D",
    "ꓭ=============>",
    "ꓭ==============D",
    "ꓭ===============D",
    "ꓭ================D    Dang..",
    "ꓭ====D",
    "{(.)} Uh, that's not right.. hm.",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} this is your length: ${(length[Math.floor(Math.random() * length.length)]).toString()}`);
message.delete();
}

module.exports.help = {
	name: "length"
}