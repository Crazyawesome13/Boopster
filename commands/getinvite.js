const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
var options = {
    maxUses: 1,
    temporary: true,
    maxAge: 86400,
    unique: true
  };
message.guild.channels.get('320718123915411456').createInvite(options).then(invite =>
    message.channel.send(`Here you go, ${message.author}!
${invite.url}
Use it carefully; It has one use, the time limit is 24 hours and the user invited must be given a role or they will be kicked 24 hours after joining!`)
);
message.delete();
}
module.exports.help = {
	name: "getinvite"
}