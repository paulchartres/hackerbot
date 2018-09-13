const commando = require('discord.js-commando');

class SayCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'say',
            group: 'utilitaires',
            memberName: 'say',
            description: 'Si tu peux utiliser cette commande de haut niveau, je dis ce que tu me demandes de dire. C\'est clairement de la manipulation.'
        });
    }

    async run(message, args)
    {
        if (message.author.id === '188295851813109760') {
          message.delete(0)
          message.channel.send(args)
        } else if (message.author.id !== '188295851813109760') {
          message.channel.send('Cette commande est de trop haut niveau pour toi.')
        }
    }
}

module.exports = SayCommand;
