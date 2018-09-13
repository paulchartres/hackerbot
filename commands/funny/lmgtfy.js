const commando = require('discord.js-commando');

class LMGTFYCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lmgtfy',
            group: 'funny',
            memberName: 'lmgtfy',
            description: 'Tu peux rappeler que Google existe à quelqu\'un avec cette commande.'
        });
    }

    async run(message, args)
    {
        var args_split = args.split(' ');
        if (args !== '')
        {
            message.channel.send('http://lmgtfy.com/?q=' + args_split.join('+'))
        }
        else
        {
            message.channel.send('Donnes moi au moins quelque chose à rechercher.')
        }
    }
}

module.exports = LMGTFYCommand;
