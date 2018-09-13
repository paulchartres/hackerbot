const commando = require('discord.js-commando');

class RollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'funny',
            memberName: 'roll',
            description: 'En utilisant mon processeur haute technologie 250Hz, je peux générer aléatoirement un nombre dans l\'intervalle de ton choix.'
        });
    }

    async run(message, args)
    {
        var args_split = args.split(' ');
        var argument_2_num = parseInt(args_split[1])
        var argument_1_num = parseInt(args_split[0])
        var randomroll = Math.floor(Math.random()*(argument_2_num-argument_1_num+1)+argument_1_num);
        message.channel.send('J\'ai généré le nombre ' + randomroll + '.')
    }
}

module.exports = RollCommand;
