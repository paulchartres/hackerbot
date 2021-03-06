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
        var h_current = (Math.floor((t / hours))%24)+1;
        var m_current = ((Math.floor(t / minutes))%60);
        var s_current = ((Math.round(t / seconds))%60);
        var y = 1970 + Math.round(t / years);

        var p_10h_h = 9-h_current
        var p_10h_m = ((10-h_current)*60)-m_current-(p_10h_h*60)

        var p_12h_h = 11-h_current
        var p_12h_m = ((12-h_current)*60)-m_current-(p_12h_h*60)

        var p_15h_h = 14-h_current
        var p_15h_m = ((15-h_current)*60)-m_current-(p_15h_h*60)

        var p_17h_h = 16-h_current
        var p_17h_m = ((17-h_current)*60)-m_current-(p_17h_h*60)-15

        if (h_current < 10) {
            message.channel.send("Il reste " + p_10h_h + " heures et " + p_10h_m + " minutes avant la pause de 10h.")
        } else if (h_current >= 10 && h_current < 12) {
            message.channel.send("Il reste " + p_12h_h + " heures et " + p_12h_m + " minutes avant la pause de midi.")
        } else if (h_current >= 12 && h_current < 15) {
            message.channel.send("Il reste " + p_15h_h + " heures et " + p_15h_m + " minutes avant la pause de 15h.")
        } else if (h_current >= 15 && h_current < 17) {
            message.channel.send("Il reste " + p_17h_h + " heures et " + p_17h_m + " minutes avant la fin des cours.")
        }
    }
}

module.exports = TimerCommand;
