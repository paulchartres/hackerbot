const commando = require('discord.js-commando');


class LennygenCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lennygen',
            group: 'funny',
            memberName: 'lennygen',
            description: 'Parce qu\'une Lenny face, c\'est bien... Mais une Lenny face aléatoire, c\'est mieux. J\'utilise des algorithmes avancés pour ça.'
        });
    }

    async run(message, args)
    {
        var randomlenny_sl_tab = ["(","[","ʕ","⸮","ᕕ(","ᖗ","ᕦ(","ヽ(","ლ(","﴾"];
        var randomlenny_sr_tab = [")","]","ʔ","?",")ᕗ","ᖘ",")ᕥ",")ﾉ","ლ)","﴿"];
        var randomlenny_el_tab = ["⌣","≋",">","","￢","⏒","$","￣","ⴲ","⍜"];
        var randomlenny_er_tab = ["⌣","≋","<","","￢","⏒","$","￣","ⴲ","⍜"];
        var randomlenny_m_tab = ["╭╮","∀","Ѡ","꘠","Ꮂ","⏠","ヘ","ᴥ","▾","³"];
        var randomlenny_s = Math.floor(Math.random()*randomlenny_sl_tab.length);
        var randomlenny_e = Math.floor(Math.random()*randomlenny_el_tab.length);
        var randomlenny_m = Math.floor(Math.random()*randomlenny_m_tab.length);
        message.channel.send(randomlenny_sl_tab[randomlenny_s] + randomlenny_el_tab[randomlenny_e] + randomlenny_m_tab[randomlenny_m] + randomlenny_er_tab[randomlenny_e] + randomlenny_sr_tab[randomlenny_s]);
    }
}

module.exports = LennygenCommand;
