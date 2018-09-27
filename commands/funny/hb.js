const commando = require('discord.js-commando');

class HBCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hb',
            group: 'funny',
            memberName: 'hb',
            description: 'Si tu veux souhaiter un anniversaire à quelqu\'un, utilises cette commande avec le tag de l\'utilisateur!'
        });
    }

    async run(message, args)
    {
        switch (args) {
            case "<@188295851813109760>":
                message.channel.send("Test");
            default:
                message.channel.send(message);
        }
    }
}

module.exports = HBCommand;
