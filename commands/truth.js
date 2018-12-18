const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
                let x = message.mentions.users.first() || message.author;
var truths = [
    "What is the stupidest thing you have ever done?",
    "Have you ever had a crush on anyone here?",
    "Name the guy you consider best / worst to date in school.",
    "What was be the most embarrassing moment in your School?",
    "Have you ever lied to your best friend?",
    "If you have been given a choice to make someone your slave- whom would it be?",
    "What is the strangest dream you have ever had?",
    "If you had only 24 hours left to live, what would you do?",
    "Did You Ever Steal Anything?",
    "What is the childish thing you still do?",
    "what was your thoughts on dating and romance?",
    "At what age you fell in love for the first time?",
    "What would you like to do on perfect first date?",
    "Most embarrassing moment",
    "would you like to know when you die or how you die",
    "if you could meet one person who would it be and why",
    "whats the most traumatic experience u ever had",
    "whats the saddest thing that has ever occurred to you",
    "if you could get a tattoo where and of what",
    "if you could revive someone from any point in time who and why",
    "if you could kill someone right now who would it be and why",
    "if you could change one thing about you what is it",
    "what are you most proud of",
];

message.channel.send(`${message.author.toString()} chose ***TRUTH***`);
            args[1]; 
message.channel.send(truths[Math.floor(Math.random() * truths.length)]);
            {
                setTimeout(function()
                {
                message.author.lastMessage.delete(message)
                }, 25);
                }
}

module.exports.help = {
	name: "truth"
}