const commando = require('discord.js-commando');

class TGLCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'tglucas',
            group: 'funny',
            memberName: 'tglucas',
            description: 'Commande spécialement dédiée à Cyril.'
        });
    }

    async run(message, args)
    {
        if (message.author.id === '325685742388903937') {
          for (var i = 0; i < 10; i++) {
            client.users.get("408353919480102922").send("Ta gueule.");
          }
        }
    }
}

module.exports = TGLCommand;
