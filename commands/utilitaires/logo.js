const commando = require('discord.js-commando');

class LogoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'logo',
            group: 'utilitaires',
            memberName: 'logo',
            description: 'Je peux hacker le logo de n\'importe quelle société si tu me donnes son site web. C\'est légal. Normalement.'
        });
    }

    async run(message, args)
    {
        message.channel.send('https://logo.clearbit.com/' + args)
    }
}

module.exports = LogoCommand;
