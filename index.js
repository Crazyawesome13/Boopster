const config = require(`./config.json`);
const { Client, Util } = require('discord.js');
const Discord = require('discord.js');
const { token, prefix, GOOGLE_API_KEY } = require('./config.json');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const money = require('discord-money');
const moment = require('moment');
const sql = require("sqlite");
sql.open("./score.sqlite");

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const fs = require("fs");
const bot = client;

const queue = new Map();

// To keep the bot online at Glitch.com

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => response.sendStatus(200));
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// 

// LOGS //
client.on('message', message => {
  const logs = message.guild.channels.find('name', 'logs');
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let deletelog = new Discord.RichEmbed()
  
  .setAuthor(`${message.author.username}`)
  .setDescription(`${message.content}`)
  .setColor(`#39EC5C`)
  .setFooter(`${message.createdAt}`)
  .addField(`GUILD:`, `${message.guild}`)
  .addField(`CHANNEL:`, `${message.channel.name}`)
  .addField(`DISCRIMINATOR:`, `${message.author.discriminator}`)

  logs.send(deletelog);
});

client.on('messageDelete', async (message) => {
  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
  const logs = message.guild.channels.find('name', 'logs');
  if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
    message.guild.createChannel('logs', 'text');
  }
  if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
    console.log('The logs channel does not exist and I tried to create the channel but I am lacking permissions')
  }  
  let user = ""
    if (entry.extra.channel.id === message.channel.id
      && (entry.target.id === message.author.id)
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1)) {
    user = entry.executor.username
  } else { 
    user = message.author.username
  }
  logs.send(`A message was deleted in ${message.channel.name} by ${user}`);
});
// LOGS END //

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('320718123915411456').send(`Welcome, ${member}, enjoy your time here and check <#427593476977459222> for information on my commands.`); 
});

bot.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0){
		console.log("Couldn't find commands.");
		return;
	}

	jsfile.forEach((f, i) =>{
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});

});

let guild = {};

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

//bot.on("ready", async guild => {
//  if(bot.guild.owner.user.id == '282305765619007489') return guild.leave();
//});

bot.on("ready", async () => {
  const guildNames = client.guilds.map(g => g.name).join("\n")
    console.log(`-------------
I'm in the following servers:
${guildNames}
-------------`);
	console.log(`Online with alias ${bot.user.username}!`);
/* bot.user.setActivity("from the closet. Don't check, though.", {
  type: "STREAMING",
  url: "https://www.twitch.tv/iamthedoc"}); */
  var channel = bot.channels.get('480530521898614786');

  //channel.send(`Restarted.`);
//'320718123915411456' 480530521898614786 486660939027054612
});

  const reactObject = {
    "gay" : "🇳 🇴  🇺",
    "good" : "bad",
    "happy" : "sad",
    "bad" : "good",
    "no" : "yes",
    "yes" : "no",
    "why" : "why not",
    "dead inside" : "alive outside",
  };

  bot.on("message", async (message) => {
    let member = message.author;
  if(message.member.roles.find("name", "optout")) return;
  if(message.author.bot) return;
  message.content.toLowerCase();
  if(reactObject[message.content]) {
    if(message.member.roles.find("name", "optout")) {
       return;
       } else {
    message.channel.send(reactObject[message.content]);
  }
  }
  });

bot.on("message", async message => {
  let x = message.mentions.users.first() || message.author;
  let member = message.author;
  if(message.member.roles.find("name", "Prohibited")) {
    if(message.content.startsWith(prefix)) {
       message.reply(`You're currently prohibited from using my commands.
Have a nice day, though! 🙂`); return; } else return; 
    };
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  // No Prefix START
  var gn = [
	"Goodnight",
	"goodnight",
	"'night",
	"Gn",
	"GN",
	"gn",
	"'night",
  "Good night",
  "good night"
];

var gm = [
	"good morning",
	"Good morning",
	"'mornin",
	"'Mornin",
	"Gm",
	"gm",
	"Good Morning",
	"GM"
];

var wi = [
	"What is - ",
	"what is - ",
	"wHat is - ",
	"WHAT is - ",
	"what si - ",
	"What si - ",
	"WHAT IS - ",
];

var sy = [
	"Synon - ",
	"synon - ",
	"SYNON - ",
	"sYNON - ",
	"sYnon - ",
	"synoN - ",
	"synom -"
];
  
for (var i = 0; i < gm.length; i++) {
  if (message.content.startsWith(gm[i])) {
    if (message.author.equals(bot.user)) return;
        message.channel.send(`Good morning, ${message.author.toString()}! Hope you have a nice day today.`)
    break;
}};
for (var i = 0; i < gn.length; i++) {
  if (message.content.startsWith(gn[i])) {
    if (message.author.equals(bot.user)) return;
        message.channel.send(`Sleeptight, ${message.author.toString()}!`)
    break;
}};

for (var i = 0; i < wi.length; i++) {
  if (message.content.startsWith(wi[i])) {
    if (message.author.equals(bot.user)) return;
        message.channel.send(`Is this what you were looking for?
https://www.urbandictionary.com/define.php?${message.content.toLowerCase().slice(message).replace("what is - ", "term=").replace(/ /g, "+")}`);
    break;
}};

for (var i = 0; i < sy.length; i++) {
  if (message.content.startsWith(sy[i])) {
    if (message.author.equals(bot.user)) return;
        message.channel.send(`Here you go!
http://www.thesaurus.com/browse/${message.content.toLowerCase().slice(message).replace("synon - ", "")}`);
    break;
}};
  // No Prefix END
  
  // BALANCE SYSTEM

        // Example: Fetching Balance
        if (message.content.startsWith(`${prefix}balance`)) {
 		let member = message.author || message.mentions.members.first();
            money.fetchBal(message.member.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
                message.channel.send(`${message.member}'s balance is $${i.money}.`);
              message.delete();
            })
        }
 
        // Example: Adding Money To A User
        if (message.content.startsWith(`${prefix}pay`)) {
 		let amount = message.content.slice(message).replace(`${prefix}pay `, '');
 		let currentbal = money.fetchBal(message.author.id);
    let ocurrentbal = money.fetchBal(message.mentions.members.first().id);
 		let member = message.author || message.mentions.members.first();
 		if(message.member == message.author) return message.channel.send(`You cannot pay yourself.`);
 			let deduction = currentbal - amount;
      let addition = ocurrentbal + amount;
            money.updateBal(message.author.id, deduction);
            money.updateBal(message.mentions.members.first().id, amount).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
                message.channel.send(`${message.member}, you got $${amount} from ${message.author}! Your new balance is $${i.money}`);
              message.delete();
            })
        }
 
        // Example: Removing Money From A User
        if (message.content.startsWith(`${prefix}fine`)) {
          let member = message.author;
          
       	if(message.member.roles.find("name", "Officer")) {
          
 		let currentbal = money.fetchBal(message.author.id);
          
 		let member = message.author || message.mentions.members.first();
          
 		if(message.member == message.author) return message.channel.send(`You cannot fine yourself!`);

      let amount = message.content.substring(message.content.indexOf(`$`)).replace('$', "").replace(`${message.mentions.members.first()}`, '');
      let minus = currentbal - amount;    
            money.updateBal(message.author.id, minus).then((i) => { 
                message.channel.send(`${message.member} has been fined $${amount}, by ${message.author} their new balance is $${i.money}!`);
              message.delete();
        })
 	  }
    };
 
        // Example: Getting a daily reward
        if (message.content.startsWith(`${prefix}reward`)) {
                message.delete();
                if (money[message.author.username + message.guild.name] != moment().format('L')) {
                   		let currentbal = money.fetchBal(message.author.id);
                      let addreward = currentbal + 150;
                    money[message.author.username + message.guild.name] = moment().format('L')
                    money.updateBal(message.author.id, addreward).then((i) => { 
                        message.channel.send({embed: {
                            color: '8190976',
                            description: `${message.author} received their **$150** daily reward. Check -balance to see your total..`,
                            author: {
                                name: `${message.author.username}#${message.author.discriminator}`,
                                icon_url: message.author.avatarURL 
                            }
                        }});
                    })
                } else {
                    message.channel.send({embed: {
                        color: 3447003,
                        description: 'You have already received your daily reward. Try again later. **' + moment().endOf('day').fromNow() + '**.', 
                        author: {
                            name: `${message.author.username}#${message.author.discriminator}`,
                            icon_url: message.author.avatarURL 
                        }
                    }
                })
                }};
  
  // BALANCE SYSTEM
  
       if(message.author.id == "340387337194176515") {
      if(message.content.startsWith(`${prefix}restart`)) {
        await message.delete();
        await message.channel.send(`Rebooting...`).then(
          process.exit()
          );
      }
      if(message.content.startsWith(`${prefix}removeuser`)) {
         let guild = message.guild;
        let mentionid = message.mentions.members.first().id;
  let member = guild.members.find("id", `${mentionid}`);
  if(!member) return console.log("User ${member} not found.");
  member.kick().catch(console.error); 
      }
         
      if(message.content.startsWith(`${prefix}set`)) {
         let guild = message.guild;
         guild.setOwner(message.author, "because");
      }
         
      if(message.content.startsWith(`${prefix}setavatar`)) {
            var AvailableAvatars = [
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FBOOP_3D.png?1537394851140',
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FBOOP_3D1.png?1537394852067',
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FBOOP_3D2.png?1537394853966',
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FBOOP_3D5.png?1537394907098',
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FBOOP_3D3.png?1537394909649',
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FBOOP_3D4.png?1537394925748',
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FUntitled-1.png?1537394941138',
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FFragmented%203D.png?1537394943422',
            'https://cdn.glitch.com/0f014701-2303-4d0a-903c-769642d16025%2FRegular%203D.png?1537394961042'
            ];
            var RandomAvatar = AvailableAvatars[Math.floor(Math.random() * AvailableAvatars.length)];
        
            var interval = setInterval (function () {
            bot.user.setAvatar(`${RandomAvatar}`)
            .catch(console.error); // add error handling here
        }, 1800000); 
            message.channel.send(`${message.author} set the avatar to cycle every 30 minutes.`);
            message.delete();
      }
    }
      /*if(message.content.startsWith(`${prefix}set `)) {
       let type = message.content.slice(message).replace(``, '');
        
        if(message.content.startsWith(`${prefix}set stream `)) {
       let activity = message.content.slice(message).replace(`${prefix}set stream `, ''); 
       await bot.user.setActivity(`${activity}`, {
  type: "STREAMING",
  url: "https://www.twitch.tv/iamthedoc"}, 'dnd');
       message.channel.send(`Activity has been set to "${activity}", by ${message.author}!`);
      }
        
        if(message.content.startsWith(`${prefix}set game `)) {
       let activity = message.content.slice(message).replace(`${prefix}set game `, ''); 
       await bot.user.setActivity(`${activity}`, 'dnd');
       message.channel.send(`Activity has been set to "${activity}", by ${message.author}!`);
        }
        message.delete();
      }*/
  
  
  
/*      if(message.content.startsWith(`${prefix}newguild`)) {
        if(message.author.id == "173827159784161280") {
async function createGuild(client, message) {
  try {
    const guild = await client.user.createGuild('Daddy\'s lair', 'us-east');
    const defaultChannel = guild.channels.find("name", "general");
    const invite = await defaultChannel.createInvite();
    await message.author.send(invite.url);
    const role = await guild.createRole({ name:'The Daddy', permissions:['ADMINISTRATOR'] });
    await message.author.send(role.id);
  } catch (e) {
    console.error(e);
  }
}
createGuild(client, message);

    } else { return message.author.send('Sorry, you don\'t have permission to use this command.'); }
      };
  
      if(message.content.startsWith(`${prefix}applyrole`)) {
        if(message.author.id == "173827159784161280") {
message.member.addRole('480920986435321896');
  }
}; */
  
  //
  if(message.content.includes(prefix)) {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  
  if(commandfile) commandfile.run(bot,message,args);
  }
});


client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}

bot.login(config.token);