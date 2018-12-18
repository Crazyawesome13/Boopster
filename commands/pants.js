const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let x = message.mentions.users.first() || message.author;
            var pants = [
              `<@${x.id}> wasn't wearing pants!`,
              `<@${x.id}> wasn't wearing underwear!`,
              `<@${x.id}> had a second pair of pants on underneath!`,
              `<@${x.id}> was luckily wearing underwear.`,
              `<@${x.id}> enjoyed it..?`,
              `<@${x.id}> and ${message.author.toString()} weren't in a public place and this makes no sense to have done in the first place.`,
              `<@${x.id}> already did it themselves??`,
              `<@${x.id}> is invisible from the waist down...`,
              `<@${x.id}> has very hairy legs.`,
              `<@${x.id}> is a spider.`,
              ];
message.channel.send(`${message.author.toString()} pulls <@${x.id}>'s pants down and it turns out: ${(pants[Math.floor(Math.random() * pants.length)]).toString()}`);
message.delete();
}

module.exports.help = {
	name: "pants"
}