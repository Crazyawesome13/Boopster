const Discord = require("discord.js");
const quote = require("./quote.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
  
  message.channel.send(quote.quotes);

message.delete();
}

module.exports.help = {
	name: "quotes"
}