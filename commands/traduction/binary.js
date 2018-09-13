const commando = require('discord.js-commando');

function stringToBinary(str, spaceSeparatedOctets) {
    function zeroPad(num) {
        return "00000000".slice(String(num).length) + num;
    }

    return str.replace(/[\s\S]/g, function(str) {
        str = zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
    });
};

class BinaryCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'binary',
            group: 'traduction',
            memberName: 'binary',
            description: 'Le binaire? C\'est ma langue maternelle. Donnes-moi du texte et je te le traduis.'
        });
    }

    async run(message, args)
    {
        message.channel.send(stringToBinary(args))
    }
}

module.exports = BinaryCommand;
