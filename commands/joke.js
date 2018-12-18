const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
                let x = message.mentions.users.first() || message.author;
var jokes = [
    "What time did the man go to the dentist? Tooth hurt-y.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "You're American when you go into the bathroom, and you're American when you come out, but do you know what you are while you're in there? European.",
    "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.",
    "Want to hear a joke about a piece of paper? Never mind... it's tearable.",
    "I just watched a documentary about beavers. It was the best dam show I ever saw!",
    "If you see a robbery at an Apple Store does that make you an iWitness?",
    "Spring is here! I got so excited I wet my plants!",
    "A ham sandwich walks into a bar and orders a beer. The bartender says, 'Sorry we don’t serve food here.'",
    "What’s Forrest Gump’s password? 1forrest1",
    "Why did the Clydesdale give the pony a glass of water? Because he was a little horse!",
    "CASHIER: 'Would you like the milk in a bag, sir?' DAD: 'No, just leave it in the carton!'",
    "Did you hear about the guy who invented Lifesavers? They say he made a mint.",
    "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
    "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!",
    "What do you call a factory that sells passable products? A satisfactory.",
    "KID: 'Hey, I was thinking…' DAD: 'I thought I smelled something burning.'",
    "How do you make a Kleenex dance? Put a little boogie in it!",
    "A termite walks into a bar and asks, 'Is the bar tender here?'",
    "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
    "Two peanuts were walking down the street. One was a salted.",
    "FAST FOOD WORKER: 'Any condiments?' DAD: 'Compliments? You look very nice today!'",
    "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    "I used to have a job at a calendar factory but I got the sack because I took a couple of days off.",
    "A woman is on trial for beating her husband to death with his guitar collection. Judge says, 'First offender?' She says, 'No, first a Gibson! Then a Fender!'",
];
message.channel.send(`${message.author.toString()} requested a joke. Here you go, hope you don't regret it.`);
            args[1]; message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
            {
                setTimeout(function()
                {
                message.author.lastMessage.delete(message)
                }, 25);
                }
}

module.exports.help = {
	name: "joke"
}