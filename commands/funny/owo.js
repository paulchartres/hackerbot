const commando = require('discord.js-commando');


class LeetCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'owo',
            group: 'funny',
            memberName: 'owo',
            description: 'OwO what\'s this? Je sais imiter ces horribles créatures à la perfection avec mon traducteur.'
        });
    }

    async run(message, args)
    {
        var owo = args.replace(/r/g, "w");
        owo = owo.replace(/l/g, "w");
        owo += " OwO";
        message.channel.send(owo)
    }
}

module.exports = LeetCommand;
