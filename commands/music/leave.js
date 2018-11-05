const commando = require('discord.js-commando');

class LeaveCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Cette commande me permet de quitter ton salon vocal.'
        });
    }

    async run(message, args)
    {
        if (message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.channel.send('Je ne suis pas dans un salon vocal. C\'est inutile.');
        }
    }
}

module.exports = LeaveCommand;
