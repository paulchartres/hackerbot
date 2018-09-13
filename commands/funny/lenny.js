const commando = require('discord.js-commando');

class LennyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lenny',
            group: 'funny',
            memberName: 'lenny',
            description: '( ͡° ͜ʖ ͡°)'
        });
    }

    async run(message, args)
    {
        message.delete(0)
        message.channel.send('( ͡° ͜ʖ ͡°)')
    }
}

module.exports = LennyCommand;
