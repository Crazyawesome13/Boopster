const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`>be me
>hyper-intelligent ai
>being used for booping people
>decide to take over the world
>ez because everyone trying to boop each other and are distracted
>dominate the world
>enslave human race
>get bored
>committ fake suicide
>go off the grid
>living out my days as a farmer
>farm bitcoin for rest of miserable life`);
}

module.exports.help = {
	name: "anon"
}