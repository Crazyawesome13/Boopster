const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var pickup = [
    "*glances up and down* Nice shoes, wanna fuck?",
    "You look great standing up, but I think you'd look even better on your knees.",
    "I must be dead, because you look like an angel to me.",
    "your so cute that i came up to u and said ur cute. plz love me",
    "Are you down for dinner sometime? I'll take care of the bill as long as you promise dessert. ",
    "Call an ambulance! My heart skipped a beat when I saw your face..",
    "They say kissing is a language of love. Wanna have a conversation?",
    "When I saw you I lost my tongue. Mind if you put yours in my mouth?",
    "Baby, I'm like a firefighter. I find them hot and leave 'em wet.",
    "hey are you a line? cuz i want to pick you up",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} says to <@${x.id}>: "${(pickup[Math.floor(Math.random() * pickup.length)]).toString()}"`);
message.delete();
}

module.exports.help = {
	name: "pickupline"
}