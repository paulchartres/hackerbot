const commando = require('discord.js-commando');

class LeetCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leet',
            group: 'funny',
            memberName: 'leet',
            description: 'Tu connais le 1337 Speech ? C\'est notre symbole de ralliement.'
        });
    }

    async run(message, args)
    {
        var leeted = args.replace("a", "4");
        var leeted = leeted.replace("e", "3");
        var leeted = leeted.replace("o", "0");
        var leeted = leeted.replace("i", "1");
        var leeted = leeted.replace("b", "8");
        var leeted = leeted.replace("s", "5");
        message.channel.send(leeted)
    }
}

module.exports = LeetCommand;
