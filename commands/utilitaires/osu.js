const commando = require('discord.js-commando');
const Discord = require('discord.js')

class OsuCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'osu',
            group: 'utilitaires',
            memberName: 'osu',
            description: 'Dans le futur, Osu est une religion à part entière avec le Mayushiisme. Il est nécessaire de pouvoir vérifier son rang.'
        });
    }

    async run(message, args)
    {
        message.channel.send("Voici le profil Osu! de " + args + '.')
        let embed = new Discord.RichEmbed()
        .setImage('http://lemmmy.pw/osusig/sig.php?colour=hex66ccff&uname=' + args + '&onlineindicator=undefined')
        .setColor('#275BF0')
        message.channel.send(embed)
    }
}

module.exports = OsuCommand;
