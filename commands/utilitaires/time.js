const commando = require('discord.js-commando');

class TimeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'time',
            group: 'utilitaires',
            memberName: 'time',
            description: 'Etant capable de hacker l\'espace temps, je peux te donner l\'heure.'
        });
    }

    async run(message, args)
    {
        var seconds = 1000
        var minutes = 1000 * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365;
        var d = new Date();
        var t = d.getTime();
        var h_current = (Math.floor((t / hours))%24)+1;
        var m_current = ((Math.floor(t / minutes))%60);
        var s_current = ((Math.round(t / seconds))%60);
        var y = 1970 + Math.round(t / years);
        message.channel.send('Il est actuellement ' + h_current + ' heures ' + m_current + ' minutes et ' + s_current + ' secondes.')
    }
}

module.exports = TimeCommand;
