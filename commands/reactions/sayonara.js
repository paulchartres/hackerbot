const commando = require('discord.js-commando');
const Discord = require('discord.js')

var randomsayonara =  ["https://media1.tenor.com/images/f048b1087df05bc0d24ed2011ef4b8b5/tenor.gif?itemid=10458435","https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif","http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-8.gif","https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706","https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif","https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif","https://i.pinimg.com/originals/03/43/e6/0343e651eded6629041d165f9c0d7cf7.gif","https://i.pinimg.com/originals/04/15/06/04150681dc848a2e409ca883f402beaf.gif","https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166","https://data.whicdn.com/images/290510883/original.gif","https://data.whicdn.com/images/310859253/original.gif","http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-11.gif","http://data.whicdn.com/images/107593752/large.gif","http://cdn.lowgif.com/small/1bbecc531fff19f7-anime-death-gifs-anime.gif","https://78.media.tumblr.com/tumblr_lsdeqsOU031qhhosyo1_250.gif","https://pa1.narvii.com/6872/cbb75c491d5b19275480147c7e93615914cd4a7ar1-540-304_hq.gif","https://i.pinimg.com/originals/32/0e/7d/320e7d875da622f3060b35ff0f122c76.gif","https://thumbs.gfycat.com/DistantMilkyAfricanmolesnake-size_restricted.gif","https://orig00.deviantart.net/b6e9/f/2018/140/b/a/suicide_by_koymija-dcc3scm.gif"]

class SayonaraCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'sayonara',
            group: 'reactions',
            memberName: 'sayonara',
            description: 'Parfois la discussion est tellement déprimante ou gênante qu\'une seule solution s\'impose... Une petite Sayori.'
        });
    }

    async run(message, args)
    {
        var randomsayonara_nb = Math.floor(Math.random() * randomsayonara.length)
        message.channel.send(randomsayonara[randomsayonara_nb])
        let embed = new Discord.RichEmbed()
        .setImage(randomsayonara[randomsayonara_nb])
        .setColor('#275BF0')
        message.channel.send(embed)
    }
}

module.exports = SayonaraCommand;
