const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            message.author.send(`Never gonna give you up
            Never gonna let you down
            Never gonna run around and desert you
            Never gonna make you cry
            Never gonna say goodbye
            Never gonna tell a lie and hurt you`);
message.delete();
}

module.exports.help = {
	name: "rickroll"
}