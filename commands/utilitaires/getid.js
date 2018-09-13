const commando = require('discord.js-commando');

class GetIDCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'getid',
            group: 'utilitaires',
            memberName: 'getid',
            description: 'Tu savais que ton compte Discord a un identifiant propre à lui ? Je peux le hacker et te le donner. C\'est technique.'
        });
    }

    async run(message, args)
    {
        message.channel.send('Ton ID utilisateur est ' + message.author.id + '.')
    }
}

module.exports = GetIDCommand;
