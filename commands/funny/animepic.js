const commando = require('discord.js-commando');
const Discord = require('discord.js');

class AnimePicCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'animepic',
            group: 'funny',
            memberName: 'animepic',
            description: 'Même les hackers regardent des anime. J\'ai quelques images secrètes à te partager.'
        });
    }

    async run(message, args)
    {
        var randomanime = Math.floor(Math.random() * 100)+1
        message.channel.send('https://www.cykadev.com/neko/anime/anime%20(' + randomanime + ').jpg')
    }
}

module.exports = AnimePicCommand;
