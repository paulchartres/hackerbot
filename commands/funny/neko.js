const commando = require('discord.js-commando');

class NekoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'neko',
            group: 'funny',
            memberName: 'neko',
            description: 'Aucun mal à consulter des images de neko. C\'est pour la science.'
        });
    }

    async run(message, args)
    {
        var randomnekos = Math.floor(Math.random() * 101)+1
        message.channel.send('https://www.cykadev.com/neko/neko%20(' + randomnekos + ').jpg')
    }
}

module.exports = NekoCommand;
