const commando = require('discord.js-commando');

function convertFromHex(hex) {
    var hex = hex.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

class UnHexCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'unhex',
            group: 'traduction',
            memberName: 'unhex',
            description: 'Puisque je peux traduire du texte en Hexadécimal, je peux aussi faire l\'inverse.'
        });
    }

    async run(message, args)
    {
        message.channel.send(convertFromHex(args))
    }
}

module.exports = UnHexCommand;
