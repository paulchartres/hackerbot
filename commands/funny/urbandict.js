const commando = require('discord.js-commando');

class UrbanDictCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'urbandict',
            group: 'funny',
            memberName: 'urbandict',
            description: 'Certaines expressions sont incompréhensibles. Si tu veux bien comprendre le futur, utilises cette commande.'
        });
    }

    async run(message, args)
    {
        var args_split = args.split(' ');
        if (args !== '')
        {
            message.channel.send('https://www.urbandictionary.com/define.php?term=' + args_split.join('+'))
        }
        else
        {
            message.channel.send('Donnes moi au moins quelque chose à rechercher.')
        }
    }
}

module.exports = UrbanDictCommand;
