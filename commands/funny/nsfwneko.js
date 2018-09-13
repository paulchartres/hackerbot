const commando = require('discord.js-commando');

class NSFWNekoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'nsfwneko',
            group: 'funny',
            memberName: 'nsfwneko',
            description: 'Normalement, je suis contre les images indécentes, mais c\'est pour la science.'
        });
    }

    async run(message, args)
    {
        if (message.channel.id === '489802402200027136') {
          var n_randomnekos = Math.floor(Math.random() * 100)+1
          let embed = new Discord.RichEmbed()
          .setImage('https://www.cykadev.com/neko/lewdneko/lewd_neko%20(' + n_randomnekos + ').jpg')
          .setColor('#275BF0')
          message.channel.send(embed)
        	} else if (message.channel.id !== '489802402200027136') {
        		message.channel.send('Tu devrais avoir honte de partager ce genre de chose ici. C\'est horrible. Tu es horrible.')
      	}
    }
}

module.exports = NSFWNekoCommand;
