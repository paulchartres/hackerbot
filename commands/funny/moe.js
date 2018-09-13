const commando = require('discord.js-commando');

var moetable = ['http://openings.moe','http://420.moe/','https://yuri.dance/','http://sayori.wtf/','http://www.magicalgirls.moe/dance/','http://wanwan.moe/','http://hestia.dance/','https://satania.moe/','https://listen.moe/#/home','http://urara.moe/','http://www.viralchart.ru/Images1/flash/desu.swf','https://0x40.mon.im/','https://web.archive.org/web/20150324063353/http://chocolate.loli.dance:80/','https://leekspin.com/','http://kaka.moe/waifusinthetrash.php','http://www.husbando.moe/','https://blazeti.me/','http://kaka.moe/','http://kaka.moe/shinobu.php','http://kaka.moe/mayoi.php','http://papi.moe/','http://suu.moe/','http://miia.moe/','http://kyou.moe/','https://www.lolisleep.moe/','http://girigiri.love/','http://headp.at/','http://anohito.tw/poi/','http://harime.ichi.moe/','https://megumin.love/','http://ineed.moe/','http://smug.moe/','https://vazkii.us/getdownonit.html','http://smug.moe/discord_truth/','http://nyanpass.com/','http://xmas.moe/']

class MoeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'moe',
            group: 'funny',
            memberName: 'moe',
            description: 'Ces sites viennent du futur. Fais toi plaisir.'
        });
    }

    async run(message, args)
    {
        var random_moe = Math.floor(Math.random() * 37)
        message.channel.send('Enjoy.\n' + moetable[random_moe])
    }
}

module.exports = MoeCommand;
