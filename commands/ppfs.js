const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
           if (message.author.id !== '173827159784161280') return;
           let x = message.mentions.users.first() || message.author;
message.channel.send(`${message.author.toString()} just put their hand into <@${x.id}>'s pockets, presumably about to steal from them!`);
               setTimeout(function()
               {
           let x = message.mentions.users.first() || message.author;
message.channel.send("and doesn't appear to be removing their hand.. Cute. That's cute, right? Is it just weird, or..?")
               }, 1000); console.log("IPDI used PPFS.")
message.delete();
}

module.exports.help = {
	name: "ppfs"
}