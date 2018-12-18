const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

module.exports.run = (bot, message, args) => {
let prefix = "-";
var kitsubs = [
'Meow_Irl',
'Cats',
'CatReactionGifs',
'CatSpotting',
'CatGifs',
'CatPics',
'CatReddit',
'KittenGifs',
'CatVideos',
'Kitten',
'Kittens',
'Kitties',
'LookAtMyCat',
'Cat',
'Kitty',
'CatPictures'
];

var nsfwsubs = [
'HENTAI_GIF',
'hentai_irl',
'GoneWild',
'NSFW_plowcam',
'legalteens',
'rearpussy',
'curvy',
'sexybutnotporn',
'buttsharpies',
'PetiteGoneWild',
'gonewildstories',
'GoneWildTube',
'treesgonewild',
'GWNerdy',
'gonemild',
'altgonewild',
'gifsgonewild',
'analgw',
'gonewildsmiles',
'onstageGW',
'RepressedGoneWild',
'bdsmgw',
'UnderwearGW',
'LabiaGW',
'TributeMe',
'WeddingsGoneWild',
'gwpublic',
'assholegonewild',
'leggingsgonewild',
'dykesgonewild',
'gonewildcurvy',
'GoneWildplus',
'BigBoobsGW',
'bigboobsgonewild',
'NSFW_Snapchat',
'snapchat_sluts',
'snapleaks',
'rule34',
'ecchi',
'futanari',
'doujinshi',
'rule34_comics',
'sex_comics',
'BDSM',
'Bondage',
'BDSMcommunity',
'bdsmgw',
'blowjobs',
'lipsthatgrip',
'deepthroat',
'onherknees',
'blowjobsandwich',
'ass',
'asstastic',
'facedownassup',
'assinthong',
'bigasses',
'buttplug',
'TheUnderbun',
'booty',
'anal',
'analgw',
'painal',
'masterofanal',
'asshole',
'AssholeBehindThong',
'assholegonewild',
'girlsinyogapants',
'yogapants',
'boobies',
'tinytits',
'TittyDrop',
'burstingout',
'boltedontits',
'boobbounce',
'boobs',
'downblouse',
'homegrowntits',
'cleavage',
'breastenvy',
'youtubetitties',
'torpedotits',
'thehangingboobs',
'pokies',
'ghostnipples',
'nipples',
'datgap',
'girlsinyogapants',
'stockings',
'legs',
'thighhighs',
'tightshorts',
'pussy',
'innie',
'simps',
'pelfie',
'LabiaGW',
'moundofvenus',
'SexyTummies',
'theratio',
'BustyPetite',
'dirtysmall',
'petitegonewild',
'xsmallgirls',
'funsized',
'hugedicktinychick',
'HappyEmbarrassedGirls',
'unashamed',
'borednignored',
'ButtsAndBareFeet'
];

var pupsubs = [
'dogs',
'DogPictures',
'puppies',
'PuppySmiles'
];

	if(message.content.startsWith(`${prefix}readit kitty`)) {
	    
	    var sub = kitsubs[Math.round(Math.random() * (kitsubs.length - 1))];

    randomPuppy(sub)
        .then(async url => {
            request.get(url).then(async r => {
                  fs.writeFile(`./kitty.jpg`, r.body, (error) => { return; })
                  await message.channel.send(`Here is your kitty/are your kitties.`);
                  message.channel.sendFile(r.body);
                  fs.unlink(`./kitty.jpg`, (error) => { return; })
            });
        });
}

	if(message.content.startsWith(`${prefix}readit puppy`)) {
    	
    	var sub = pupsubs[Math.round(Math.random() * (pupsubs.length - 1))];

    randomPuppy(sub)
        .then(async url => {
            request.get(url).then(async r => {
                  fs.writeFile(`./puppy.jpg`, r.body, (error) => { return; })
                  await message.channel.send(`Here is your puppy/puppies.`);
                  message.channel.sendFile(r.body);
                  fs.unlink(`./puppy.jpg`, (error) => { return; })
            });
        });
}

	if(message.content.startsWith(`${prefix}readit porn`)) {
  
  		if (message.member.roles.find("name", "NSFW") == false) return message.channel.send("You do not have permission to use this command."); 
  		if (message.channel.nsfw == false) return message.channel.send("This needs to be used in the NSFW channel."); 

  
    	var sub = nsfwsubs[Math.round(Math.random() * (nsfwsubs.length - 1))];

    randomPuppy(sub)
        .then(async url => {
            request.get(url).then(async r => {
                  fs.writeFile(`./hentai.jpg`, r.body, (error) => { return; })
                  await message.channel.send(`Procured from the r/${sub} subreddit.`);
                  message.channel.sendFile(r.body);
                  fs.unlink(`./hentai.jpg`, (error) => { return; })
            });
        });
}
	if(message.content.startsWith(`${prefix}readit list`)) {
		let monkaS = bot.emojis.find("name", "monkaS");
    //#Collection.find(x => x.name === "name")
		var readitlist = new Discord.RichEmbed()
		.setDescription("A list of subreddits you can pull random pictuers from.")
		.setAuthor("REDDIT LIST")
		.setColor("#ffd100")
		.addField("Kitty", "Pull random pictures of kitties from kitty subreddits")
		.addField("Puppy", "Pull random pictuers of puppies from puppy subreddits")
		.addField("Porn", "Pull random pictures of porn from porn subreddits " + `${monkaS}`)
    .addField("You can use these as such: '-readit kitty'", "Happy hunting. 👍")
    
    message.channel.send(readitlist);
    
}
		message.delete();
}
module.exports.help = {
	name: "readit"
}