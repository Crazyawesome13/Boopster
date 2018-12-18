const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  let guildMember = message.mentions.members.first() || message.author;
              let x = message.mentions.users.first() || message.author;
    message.delete();
    if(!message.member.roles.find("name", "Staff")) return;
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: -demote <user> <reason>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("ADMINISTRATOR")) return errors.equalPerms(message, bUser, "ADMINISTRATOR");

    let demoteEmbed = new Discord.RichEmbed()
    .setDescription("~Demote~")
    .setColor("#bc0000")
    .addField("Demoted User", `${bUser} with ID ${bUser.id}`)
    .addField("Demoted By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    guildMember.setRoles([473991780036247553]);
    bUser.addRole("name", "Prohibited");
    incidentchannel.send(demoteEmbed);
}

module.exports.help = {
  name:"demote"
}