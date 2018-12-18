const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var serenade = [
    "Rah, rah, ah, ah, ah, roma, roma, ma. Gaga, ooh, la, la... want your bad romance! How'd they do?",
    "Been around the world, don't speak the language. But your booty don't need explaining. How many out of ten??",
    "White lips, pale face, breathing in snow flakes. Bit short if you ask me, wonder if it reflects any aspects of the person singing..",
    "I can't wait 'til I get you on the floor good-looking",
    "Sun-kissed skin, so hot, we'll melt your popsicle!",
    "I'm feeling sexy and free, like glitter's raining on me",
    "My milkshake brings all the boys to the yard",
    "What you gon' do with all that junk? All that junk inside your trunk!",
    "Do you ever feel like a plastic bag, drifting in the wind, wanting to start again?",
    "I said, excuse me, you're a hell of a guy!",
    "Love when you can, cry when you have to, be who you must, that's a part of the plan. Await your arrival with simple survival, and one day we'll all understand.",
    "If Heaven and Hell decide that they both are satisfied, illuminate the No's on their Vacancy signs, if there's no one to guide you when your soul departs, then I will follow you into the dark.",
    "I want you to lead me, take me somewhere... Don't want to live in a dream one more day.",
    "Can't you see? Oh can't you see, what that woman is doing to me.",
    "If I leave here tomorrow, would you still remember me?",
    "You're dangerous cause your honest, you're dangerous cause you don't know what you want.",
    "May be a loser but I'm not a dweeb. I'm just a sucker with no self-esteem.",
    "Some people never come clean, I think you know what I mean. You're walking a wire between pain and desire, and looking for love in-between.",
];
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} begins serenading <@${x.id}>.`);
message.channel.send(`${message.author.toString()}: ${serenade[Math.floor(Math.random() * serenade.length)]}`);
message.delete();
}

module.exports.help = {
	name: "serenade"
}