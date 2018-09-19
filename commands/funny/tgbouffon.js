const commando = require('discord.js-commando');

class TGCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'tgbouffon',
            group: 'funny',
            memberName: 'tgbouffon',
            description: 'Commande spécialement dédiée à Lucas.'
        });
    }

    async run(message, args)
    {
        message.channel.send('<@325685742388903937>, ta gueule.');
    }
}

module.exports = TGCommand;
