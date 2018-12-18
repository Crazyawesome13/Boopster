const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            var rolelist = [
                "lime",
                "red",
                "yellow",
                "orange",
                "blue",
                "green",
                "purple",
                "aqua",
                "brown",
                "white",
                "pink",
                "turquoise",
                "dark blue",
                "olive",
                "navy blue",
                "slate blue",
                "cherry",
                "light red",
                "pastel pink",
                "seafoam",
                "hibiscus",
                "aqua marine",
                "optout",
                "purple2"
            ];
  let member = message.member;
  let prefix = "-"
            let role = message.guild.roles.find("name", `${message.content.slice(message).replace(`${prefix}role add `, '').toString()}`);
            let rolere = message.guild.roles.find("name", `${message.content.slice(message).replace(`${prefix}role remove `, '').toString()}`);
  
if (message.guild.id == "480920985063784458") {
      // Daddy's Lair Exclusive 
    var norole = [
      "The Daddy",
      "Trusted",
      "Moderator",
      "Admin",
      "Administrator",
      "Mod",
      "My God",
      "Staff",
      "staff",
      "Roast Of The Day",
      "TOD",
      "tod",
      "Prohibited"
      ];
for (var i = 0; i < norole.length; i++) {
  if (message.content.includes(norole[i])) {
    return message.channel.send(`That role is off-limits.`);
    break;
  }
}
    let guild = message.guild;
    // ROLE NEW
              if(message.content.startsWith(`${prefix}role new`)) {
              let msgcolor = message.content.substring(message.content.indexOf("#"));
              let name = message.content.slice(message).replace(`${prefix}role new `, '').replace(msgcolor, '').toString();
              var roleoptions = {
                name: `${name}`,
                position: 7,
                mentionable: true,
                color: `${msgcolor}`,
              };
              guild.createRole(roleoptions); 
                
              let rolecreationembed = new Discord.RichEmbed()
              .setAuthor(`NEW ROLE`)
              .setColor(`${msgcolor}`)
              .setDescription(`${message.author} has created a role by the name "*${name}*" with the colour to the left of this message.`)
              .addField(`Thank you for using ${prefix}role new!`, `Enjoy the rest of your 24 hour cycle, you can add this new role with ${prefix}role add <NAME>`);
                
              message.channel.send(rolecreationembed); } 
// ROLE ADD
            if(message.content.startsWith(`${prefix}role add`)) {
            if (message.member.roles.find("name", `${role}`)) {
message.channel.send(`You already have this role.`);
              
              } else {
                
                member.addRole(role).catch(console.error);
message.channel.send(`${message.author.toString()} has been added to ***${message.content.slice(message).replace(`${prefix}role add `, '').toString()} role***.`);
              }
            }
// ROLE DELETE
if(message.content.startsWith(`${prefix}role del`)) {

  let member = message.author;
  if(message.member.roles.find("name", "Staff")) {
      let guild = message.guild;
      let guilds = message.guild.id;
      let rolename = message.content.slice(message).replace(`${prefix}role del `, '').toString();
      let role = guild.roles.find("name", `${rolename}`);
      if(!guild.roles.find("name", `${rolename}`)) return message.channel.send(`This role cannot be found.`);
      role.delete();

              let roledeleted = new Discord.RichEmbed()
              .setAuthor(`DELETED ROLE`)
              .setColor(`#900000`)
              .setDescription(`${message.author} has deleted a role by the name "*${rolename}*".`)
              .addField(`Thank you for using ${prefix}role del!`, `Enjoy the rest of your 24 hour cycle.`);
                
              message.channel.send(roledeleted);
} else { return message.channel.send(`This command is not for you!`); }; 
  }
} else {
  
  
// ROLE REMOVE
            if (message.content.startsWith(`${prefix}role remove`)) {

            if (message.member.roles.find("name", `${message.content.slice(message).replace(`${prefix}role remove `, '').toString()}`)) {
            member.removeRole(rolere).catch(console.error);
message.channel.send(`${message.author.toString()} has been removed from the following role: ${message.content.slice(message).replace(`${prefix}role remove `, '').toString()}`);
            } else {
message.channel.send(`${message.author.toString()} you do not have a role called "${message.content.slice(message).replace(`${prefix}role remove `, '').toString()}", thus I could not remove it from you. Could you have made a typo?`) 
            } }
// ROLE ADD
            if(message.content.startsWith(`${prefix}role add`)) {

            for (var i = 0; i < rolelist.length; i++) {
            if (message.content.includes(rolelist[i]) == true) {

            if (message.member.roles.find("name", `${role}`)) {
message.channel.send(`You already have this role.`);
              } else {
                
                member.addRole(role).catch(console.error);
message.channel.send(`${message.author.toString()} has been added to ***${message.content.slice(message).replace(`${prefix}role add `, '').toString()} role***.`);
              }}}
            for (var i = 0; i < rolelist.length; i++) {
            if (message.content.includes(rolelist[i]) == false) {break;}};
} 
// ROLE LIST
            if(message.content.startsWith(`${prefix}role list`)) {

                var roleembed = new Discord.RichEmbed()
                .setAuthor(`Current Usable Colours:`)
                .setColor(`RANDOM`)
                .addField(`${rolelist.toString().replace(/,/g, `,
`)}`, `Enjoy.`)
// (/ /g, '%20')        //const guildNames = client.guilds.map(g => g.name).join("\n")
                message.channel.send(roleembed);
            }
              
// ROLE DELETE
if(message.content.startsWith(`${prefix}role del`)) {

  let member = message.author;
  if(message.member.roles.find("name", "Staff")) {
      let guild = message.guild;
      let guilds = message.guild.id;
      let rolename = message.content.slice(message).replace(`${prefix}role del `, '').toString();
      let role = guild.roles.find("name", `${rolename}`);
      if(!guild.roles.find("name", `${rolename}`)) return message.channel.send(`This role cannot be found.`);
      role.delete();

              let roledeleted = new Discord.RichEmbed()
              .setAuthor(`DELETED ROLE`)
              .setColor(`#900000`)
              .setDescription(`${message.author} has deleted a role by the name "*${rolename}*".`)
              .addField(`Thank you for using ${prefix}role del!`, `Enjoy the rest of your 24 hour cycle.`);
                
              message.channel.send(roledeleted);
} else { return message.channel.send(`This command is not for you!`); }; 
  }
              
  message.delete(); 
 }
}
module.exports.help = {
	name: "role"
}