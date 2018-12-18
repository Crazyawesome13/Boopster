const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have permission to use this command!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("I can't find that user, sorry.");
  let warnlevel = warns[wUser.id].warns;
  if(warnlevel == 0) { return message.channel.send(`Sorry, something went wrong, that user either doesn't exist, doesn't have any warns, or some malfunction has occured.`); } else {
  message.channel.send(`<@${wUser.id}> has ${warnlevel} warnings.`);
  }
}

module.exports.help = {
  name: "warns"
} 