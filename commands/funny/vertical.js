const commando = require('discord.js-commando');

class VerticalCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'vertical',
            group: 'funny',
            memberName: 'vertical',
            description: 'J\'écris ton texte de haut en bas. C\'est une commande de haut niveau.'
        });
    }

    async run(message, args)
    {
        var columntext = []
        for (var i = 0; i < args.length; i++) {
          columntext.push(args[i] + '\n')
        }
        message.channel.send(columntext)
    }
}

module.exports = VerticalCommand;
