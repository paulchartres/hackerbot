const commando = require('discord.js-commando');

class ReverseCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'reverse',
            group: 'funny',
            memberName: 'reverse',
            description: '.maertsniam port tse\'c ,tiordne\'l à erircE.'
        });
    }

    async run(message, args)
    {
        var reversed_args = args.split("").reverse().join("");
        message.channel.send(reversed_args)
    }
}

module.exports = ReverseCommand;
