const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let type = message.content.slice(message).replace(``, '');
    let prefix = "-";
        
        if(message.content.startsWith(`${prefix}activity stream `)) {
       let activity = message.content.slice(message).replace(`${prefix}activity stream `, ''); 
       await bot.user.setActivity(`${activity}`, {
  type: "STREAMING",
  url: "https://www.twitch.tv/iamthedoc"}, 'dnd');
       message.channel.send(`Activity has been set to "${activity}", by ${message.author}!`);
      }
        
        if(message.content.startsWith(`${prefix}activity game `)) {
       let activity = message.content.slice(message).replace(`${prefix}activity game `, ''); 
       await bot.user.setActivity(`${activity}`, 'dnd');
       message.channel.send(`Activity has been set to "${activity}", by ${message.author}!`);
        }
        message.delete();
}

module.exports.help = {
	name: "activity"
}       