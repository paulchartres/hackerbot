const commando = require('discord.js-commando');

var uptime = 0;
var timer = setInterval(
    function() {
        uptime++;
    }, 1000
);

class UptimeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'uptime',
            group: 'utilitaires',
            memberName: 'uptime',
            description: 'Puisque je suis en symbiose avec mon processeur 250Hz, je peux te dire depuis combien de temps il tourne.'
        });
    }

    async run(message, args)
    {
        message.channel.send('Je suis en ligne depuis ' + Math.floor(uptime/60) + ' minutes.')
    }
}

module.exports = UptimeCommand;
