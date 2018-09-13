const commando = require('discord.js-commando');

function binaryToString(str) {
    str = str.replace(/\s+/g, '');
    str = str.match(/.{1,8}/g).join(" ");
    var newBinary = str.split(" ");
    var binaryCode = [];
    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    return binaryCode.join("");
}

class UnBinaryCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'unbinary',
            group: 'traduction',
            memberName: 'unbinary',
            description: 'En plus de traduire du texte au binaire, je peux aussi faire l\'inverse. C\'est ma langue natale.'
        });
    }

    async run(message, args)
    {
        message.channel.send(binaryToString(args))
    }
}

module.exports = UnBinaryCommand;
