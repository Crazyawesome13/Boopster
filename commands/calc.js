const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let prefix = "-";
const argss = message.content.slice(prefix.length).trim().split(/ +/g);
    let input1 = parseInt(args[0]);
    let input2 = parseInt(args[2]);
    if(message.content.includes("+")) {
      let sum = input1 + input2;
      message.channel.send(`The sum of ${input1} added to ${input2} equals ${sum}`);
    } else if(message.content.startsWith(`-calc ${input1} - ${input2}`)) {
      let difference = input1 - input2;
      message.channel.send(`The difference between ${input1} subtracted by ${input2} equals ${difference}`);
    } else if(message.content.includes("/")) {
      let quotient = input1 / input2;
      message.channel.send(`The quotient of ${input1} divided by ${input2} equals ${quotient}`);
    } else if(message.content.includes("*")) {
      let product = input1 * input2;
      message.channel.send(`The product of ${input1} multiplied by ${input2} equals ${product}`);
    } else if(message.content.startsWith(`-calc help` || `-calc list`)) {
      let calchelp = new Discord.RichEmbed()
      .setAuthor("Calculator Help")
      .setDescription("How to use the calculator command:")
      .setColor('6666ff')
      .addField("Syntax:", "-calc <first digit> <+, -, /, *> <second digit>")
      .addField("Example:", "-calc 3 + 5")
      .addField("Result:", "3 + 5 Equals 8")
      .addField("Using -, /, *:", "Replace \"+\" with - for subtraction, / for division, and * for multiplication.")
      
      message.channel.send(calchelp);
    } else {
     message.channel.send(`\`"${message.content}"\` isn't the proper usage. 
Example: -calc 1 + 2 
Result: 3`); 
    }
  message.delete();
}

module.exports.help = {
	name: "calc"
}