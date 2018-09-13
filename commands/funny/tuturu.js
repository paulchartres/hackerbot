const commando = require('discord.js-commando');

var randomvideo =  ["k4qj0clZ-4E","N8W7TmcSdSo","nmpgbb6b3Wc","OhqOCsiRPqw","lSNI1ErEgTA","r5SdDtx9Kpk","3qpSIhX8Zf8","A3M4fNGiRB4","QPZ5zrf2IpU","6cGprZe4TjE","n3uQRKj5IYw","d5xc2vnv4kg","l_OJ0Wu26jU","0BH5gllUsVU","eHlau5Xecx0","2Vazc1EKRmI","UYjUWT-EQdE","xcqJX0PE3dw","_pn2Gliij1A","3snWjti5pAM"]

class TuturuCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'tuturu',
            group: 'funny',
            memberName: 'tuturu',
            description: 'Dans le futur, le Mayushisme est devenu omniprésent. Tu te dois te te plier à cette culture.'
        });
    }

    async run(message, args)
    {
        var randomvideo_nb = Math.floor(Math.random() * randomvideo.length)
        message.channel.send('Mayushii desu.\nhttps://www.youtube.com/watch?v=' + randomvideo[randomvideo_nb])
    }
}

module.exports = TuturuCommand;
