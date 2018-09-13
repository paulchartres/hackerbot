const commando = require('discord.js-commando');

function makeship(arg1,arg2){
  var final_arg = []
  final_arg.push(arg1.slice(0, Math.round(arg1.length / 2)))
  final_arg.push(arg2.slice(0, Math.round(arg2.length / 2)))
  return final_arg.join('')
}

class ShipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ship',
            group: 'funny',
            memberName: 'ship',
            description: 'Avec mes 256Kb de RAM, je peux calculer la compatibilité entre deux individus. C\'est 100% juste.'
        });
    }

    async run(message, args)
    {
        var args_split = args.split(' ');
        var argument_2 = args_split[1]
        var argument_1 = args_split[0]
        var shipname = makeship(argument_1,argument_2)
        var shipvalue = Math.floor(Math.random() * 100) + 1
        message.channel.send('Le ship de ' + argument_1 + ' et ' + argument_2 + ' s\'appelle ' + shipname + '. Il a une compatibilité de ' + shipvalue + '%.')
    }
}

module.exports = ShipCommand;
