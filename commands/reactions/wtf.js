const commando = require('discord.js-commando');
const Discord = require('discord.js')

class WTFCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'wtf',
            group: 'reactions',
            memberName: 'wtf',
            description: 'Quand tu as juste envie de répondre WTF à quelqu\'un, cette commande est très utile.'
        });
    }

    async run(message, args)
    {
        var randomwtf = Math.floor(Math.random() * 20)+1
        let embed = new Discord.RichEmbed()
        .setImage('https://www.cykadev.com/neko/reactions/wtf/wtf%20(' + randomwtf + ').jpg')
        .setColor('#275BF0')
        message.channel.send(embed)
    }
}

module.exports = WTFCommand;
