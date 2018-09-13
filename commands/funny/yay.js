const commando = require('discord.js-commando');

class YayCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'yay',
            group: 'funny',
            memberName: 'yay',
            description: '(ﾉ◕ヮ◕)ﾉ*･ﾟ✧'
        });
    }

    async run(message, args)
    {
        message.delete(0)
        message.channel.send("(ﾉ◕ヮ◕)ﾉ*･ﾟ✧")
    }
}

module.exports = YayCommand;
