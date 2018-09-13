const commando = require('discord.js-commando');

function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}

class HexCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hex',
            group: 'traduction',
            memberName: 'hex',
            description: 'Vu que j\'ai pris Hexadécimal en LV2, je peux traduire n\'importe quel texte.'
        });
    }

    async run(message, args)
    {
        message.channel.send(convertToHex(args))
    }
}

module.exports = HexCommand;
