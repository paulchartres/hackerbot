const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    dispatcher.destroy();
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}))
    server.queue.shift();
    server.dipatcher.on('end', function(){
        if (server.queue[0])
        {
            Play(connection,message);
        }
        else
        {
            connection.disconnect();
        }
    })
}

class SkipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: 'Quand un morceau est juste mauvais, tu peux le passer avec cette commande.'
        });
    }

    async run(message, args)
    {
        if (message.guild.voiceConnection)
        {
            var server = servers[message.guild.id];
            message.channel.send('J\'ai passé le morceau.');
            message.member.voiceChannel.join()
                .then(connection =>{
                    var server = servers[message.guild.id];
                    Play(connection, message);
                })
        } else {
            message.channel.send('Je dois être dans un salon vocal pour pouvoir passer le morceau.');
        }
    }
}

module.exports = SkipCommand;
