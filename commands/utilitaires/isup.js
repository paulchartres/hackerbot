const commando = require('discord.js-commando');

class IsUpCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'isup',
            group: 'utilitaires',
            memberName: 'isup',
            description: 'Je peux utiliser mes capacités en espace-temps pour vérifier si un site en question est en ligne ou pas.'
        });
    }

    async run(message, args)
    {
        message.channel.send('http://www.isitdownrightnow.com/' + args + '.html')
    }
}

module.exports = IsUpCommand;
