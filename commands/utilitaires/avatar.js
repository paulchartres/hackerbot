const commando = require('discord.js-commando');
const Discord = require('discord.js')

class AvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'utilitaires_ppbot',
            memberName: 'avatar',
            description: 'Je peux hacker les serveurs de Discord pour y récupérer ton avatar et te le donner, le tout en HD.'
        });
    }

    async run(message, args)
    {
        message.channel.send('Voici ton image de profil.')
        let embed = new Discord.RichEmbed()
        .setImage(message.author.avatarURL)
        .setColor('#275BF0')
        message.channel.send(embed)
    }
}

module.exports = AvatarCommand;
