const commando = require('discord.js-commando');
const Discord = require('discord.js')

class PKFCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pkf',
            group: 'reactions',
            memberName: 'pkf',
            description: 'Parce que parfois, dans certains cas, on ne peut pas réagir autrement que par une pokerface.'
        });
    }

    async run(message, args)
    {
        var randompkf = Math.floor(Math.random() * 15)+1
        message.channel.send('https://www.cykadev.com/neko/reactions/pkf/pkf%20(' + randompkf + ').jpg')
    }
}

module.exports = PKFCommand;
