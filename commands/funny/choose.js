const commando = require('discord.js-commando');

class ChooseCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'choose',
            group: 'funny',
            memberName: 'choose',
            description: 'Donnes moi plusieurs éléments, et je choisirai lequel je préfère.'
        });
    }

    async run(message, args)
    {
        var args_split = args.split(' ');
        var randomarg = Math.floor(Math.random() * args_split.length)
        message.channel.send('Hmmm... Mes pouvoirs de Hacker m\'ont fait choisir \'' + args_split[randomarg] + '\' .')
    }
}

module.exports = ChooseCommand;
