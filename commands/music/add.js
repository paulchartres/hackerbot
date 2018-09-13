const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

class AddCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'add',
            group: 'music',
            memberName: 'add',
            description: 'Si tu mets un lien YouTube après cette commande, je l\'ajoute à la playlist de mon système de musique haute définition, 3Kbps.'
        });
    }

    async run(message, args)
    {
        if (message.member.voiceChannel)
        {
            if (!message.guild.voiceConnection)
            {
                if (!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                var server = servers[message.guild.id];
                message.channel.send('Je viens d\'ajouter ça à la liste d\'attente.');
                server.queue.push(args);
            }
        }
        else
        {
            message.channel.send('Tu dois être dans un salon pour que je puisse y hacker mon chemin.');
        }
    }
}

module.exports = AddCommand;
