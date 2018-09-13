const commando = require('discord.js-commando');

class DespacitoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'despacito',
            group: 'funny',
            memberName: 'despacito',
            description: 'Non... Vraiment, ne fais pas ça. Je t\'en supplie.'
        });
    }

    async run(message, args)
    {
        message.reply('ta gueule.')
    }
}

module.exports = DespacitoCommand;
