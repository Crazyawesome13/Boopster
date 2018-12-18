const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} thinks <@${x.id}> should use their voice so they can use their fingers for something else.. ;))`);
            setTimeout(function()
            {
            let x = message.mentions.users.first() || message.author;
message.channel.send(`Making ${message.author.toString()} food, of course.`)
            }, 3000);
            {
                setTimeout(function()
                {
                   message.author.lastMessage.delete(message)
                }, 25);
            }
}

module.exports.help = {
	name: "speak"
}