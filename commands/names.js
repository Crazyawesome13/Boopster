const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            var fnames = [
                // female
                "MARY",
                "PATRICIA",
                "LINDA",
                "BARBARA",
                "ELIZABETH",
                "JENNIFER",
                "MARIA",
                "SUSAN",
                "MARGARET",
                "DOROTHY",
                "LISA",
                "NANCY",
                "KAREN",
                "BETTY",
                "HELEN",
                "SANDRA",
                "DONNA",
                "CAROL",
                "RUTH",
                "SHARON",
                "MICHELLE",
                "LAURA",
                "SARAH",
                "KIMBERLY",
                "DEBORAH",
                // male
                "JAMES",
                "JOHN",
                "ROBERT",
                "MICHAEL",
                "WILLIAM",
                "DAVID",
                "RICHARD",
                "CHARLES",
                "JOSEPH",
                "THOMAS",
                "CHRISTOPHER",
                "DANIEL",
                "PAUL",
                "MARK",
                "DONALD",
                "GEORGE",
                "KENNETH",
                "STEVEN",
                "EDWARD",
                "BRIAN",
                "RONALD",
                "ANTHONY",
                "KEVIN",
                "JASON",
                "MATTHEW"
            ];
            var lnames = [
                "SMITH",
                "JOHNSON",
                "WILLIAMS",
                "JONES",
                "BROWN",
                "DAVIS",
                "MILLER",
                "WILSON",
                "MOORE",
                "TAYLOR",
                "ANDERSON",
                "THOMAS",
                "JACKSON",
                "WHITE",
                "HARRIS",
                "MARTIN",
                "THOMPSON",
                "GARCIA",
                "MARTINEZ",
                "ROBINSON",
                "CLARK",
                "RODRIGUEZ",
                "LEWIS",
                "LEE",
                "WALKER",
                "HALL",
                "ALLEN",
                "YOUNG",
                "HERNANDEZ",
                "KING",
                "WRIGHT",
                "LOPEZ",
                "HILL",
                "SCOTT",
                "GREEN",
                "ADAMS",
                "BAKER",
                "GONZALEZ",
                "NELSON",
                "CARTER",
                "MITCHELL",
                "PEREZ",
                "ROBERTS",
                "TURNER",
                "PHILLIPS",
                "CAMPBELL",
                "PARKER",
                "EVANS",
                "EDWARDS",
                "COLLINS"
            ];
            if (message.member.roles.find('name', 'kevin')) {
                let x = message.mentions.users.first() || message.author;
message.channel.send(`How does 'KEVIN ABSTRACT' sound, ${message.author.toString()}?`);
message.delete();
            } else {
               let x = message.mentions.users.first() || message.author;
message.channel.send(`How does '${(fnames[Math.floor(Math.random() * fnames.length)]).toString()} ${(lnames[Math.floor(Math.random() * lnames.length)]).toString()}' sound ${message.author.toString()}?`); 
message.delete();}
}

module.exports.help = {
	name: "names"
}