const commando = require('discord.js-commando');
const Discord = require('discord.js');

class LoliCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'loli',
            group: 'funny',
            memberName: 'loli',
            description: 'C\'est légal, elles sont majeures.'
        });
    }

    async run(message, args)
    {
        var randomloli = Math.floor(Math.random() * 51)+1
        let embed = new Discord.RichEmbed()
        .setImage('https://www.cykadev.com/neko/loli/loli%20(' + randomloli + ').jpg')
        .setColor('#275BF0')
        message.channel.send(embed)
    }
}

module.exports = LoliCommand;
