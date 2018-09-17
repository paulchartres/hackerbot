const commando = require('discord.js-commando');

class TimerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'timer',
            group: 'utilitaires',
            memberName: 'timer',
            description: 'Ce timer te permet de voir combien de temps il reste avant la prochaine pause ou la fin des cours.'
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
        var h_current = (Math.floor((t / hours))%24)+2;
        var m_current = ((Math.floor(t / minutes))%60);
        var s_current = ((Math.round(t / seconds))%60);
        var y = 1970 + Math.round(t / years);
        if (h_current < 10) {
          message.channel.send("Il reste " + 10-h_current + " heures et " + ((10-h_current)*60)-m_current + " minutes avant la pause de 10h.");
        }
    }
}

module.exports = TimerCommand;
