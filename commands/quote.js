const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
  var quotes = [
    "fake quote"
    ];
  
  if(message.content.startsWith("-quote list")) {
    message.channel.send(quotes);
  } else {
let quote = message.content.slice(message).replace("-quote ", "").replace(`"`, "").replace(`"`, "");

 quotes.push(`${quote}`);
  
  message.channel.send(`${message.author} added a quote: \`\`${quote}\`\`.\n
Current Quote List:
\`\`\`${quotes}\`\`\``);
  
message.delete();
  }
}

module.exports.help = {
	name: "quote"
}