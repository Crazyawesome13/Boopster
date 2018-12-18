const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let member = message.author;
    if(!message.member.roles.find("name", "Staff")) {
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.reply("Missing role 'Muted', please create this role.");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) || message.author;
    if (wUser = message.author) return message.channel.send(`You cannot mute that user.`);
    let x = message.mentions.users.first() || message.author;
    let mutetime = "15m";
    let reason = args.join(" ").slice(22);
  
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
			message.delete();
  
    let muteEmbed = new Discord.RichEmbed()
  .setDescription("***MUTE***")
  .setAuthor(message.author.username)
  .setColor("#5C39EC")
  .addField("Offender", `<@${wUser.id}>`)
  .addField("Muted In", message.channel)
  .addField("Reason", reason);

  let mutechannel = message.guild.channels.find(`name`, "incidents");
  if(!mutechannel) return message.reply("Couldn't find channel.");
  mutechannel.send(muteEmbed);
    } else return message.channel.send(`You do not have permission to use this command!`);
}

module.exports.help = {
	name: "tempmute"
}