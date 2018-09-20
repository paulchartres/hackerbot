const commando = require('discord.js-commando');

class MLCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mercilucas',
            group: 'funny',
            memberName: 'mercilucas',
            description: 'Commande spécialement dédiée à Yoan.'
        });
    }

    async run(message, args)
    {
        message.channel.send('<@408353919480102922>, merci quand même!');
    }
}

module.exports = MLCommand;
