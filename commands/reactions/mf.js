const commando = require('discord.js-commando');
const Discord = require('discord.js')

class MFCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mf',
            group: 'reactions',
            memberName: 'mf',
            description: 'Quoi de mieux qu\'une image pour dire à quelqu\'un d\'aller se faire voir avec classe ?'
        });
    }

    async run(message, args)
    {
        var randommf = Math.floor(Math.random() * 15)+1
        message.channel.send(randommf);
    }
}

module.exports = MFCommand;
