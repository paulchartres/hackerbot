const commando = require('discord.js-commando');
const Discord = require('discord.js')

class RateCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rate',
            group: 'funny',
            memberName: 'rate',
            description: 'Je peux hacker l\'espace temps pour te donner le niveau de coolitude de ce que tu me présentes.'
        });
    }

    async run(message, args)
    {
        var rate = Math.floor(Math.random() * 100)
        var randomphrase1_proba = Math.floor(Math.random() * 10) + 1
        var randomphrase1 = ''
        var randomphrase2_proba = Math.floor(Math.random() * 10) + 1
        var randomphrase2 = ''

        if (randomphrase1_proba === 1)
        {
      		randomphrase1 = 'environ'
      	}
        else if (randomphrase1_proba === 2)
        {
      		randomphrase1 = 'tranquille'
      	}
        else if (randomphrase1_proba === 3)
        {
      		randomphrase1 = 'probablement'
      	}
        else if (randomphrase1_proba === 4)
        {
      		randomphrase1 = 'facile'
      	}
        else if (randomphrase1_proba === 5)
        {
      		randomphrase1 = 'sans aucun doute'
      	}
        else if (randomphrase1_proba === 6)
        {
      		randomphrase1 = 'peut-être'
      	}
        else if (randomphrase1_proba === 7)
        {
      		randomphrase1 = 'carrément'
      	}
        else if (randomphrase1_proba === 8)
        {
      		randomphrase1 = 'sûrement'
      	}
        else if (randomphrase1_proba === 9)
        {
      		randomphrase1 = 'quasiment'
      	}
        else if (randomphrase1_proba === 10)
        {
      		randomphrase1 = 'quelque peu'
      	}

      	if (randomphrase2_proba === 1)
        {
      		randomphrase2 = 'Selon moi, '
      	}
        else if (randomphrase2_proba === 2)
        {
      		randomphrase2 = 'Hmmm... Je pense que '
      	}
        else if (randomphrase2_proba === 3)
        {
      		randomphrase2 = 'Franchement, '
      	}
        else if (randomphrase2_proba === 4)
        {
      		randomphrase2 = 'Je sais pas trop, mais je dirais que '
      	}
        else if (randomphrase2_proba === 5)
        {
      		randomphrase2 = 'Ah, c\'est compliqué... je pense que '
      	}
        else if (randomphrase2_proba === 6)
        {
      		randomphrase2 = 'Peut-être que ça ira à l\'encontre votre avis, mais je suis sûre que '
      	}
        else if (randomphrase2_proba === 7)
        {
      		randomphrase2 = 'Selon mes pouvoirs de hacker, je sais que '
      	}
        else if (randomphrase2_proba === 8)
        {
      		randomphrase2 = 'A juste titre, je pense que '
      	}
        else if (randomphrase2_proba === 9)
        {
      		randomphrase2 = 'C\'est difficile à dire, mais je suis sûr que '
      	}
        else if (randomphrase2_proba === 10)
        {
      		randomphrase2 = 'Alors, selon mes calculs, '
      	}

        if (args !== '')
        {
            message.channel.send(randomphrase2 + args + ' vaut ' + randomphrase1 + ' un ' + rate + '/100.')
        }
        else
        {
            message.channel.send('Je peux pas te donner mon avis sur rien du tout.')
        }

    }
}

module.exports = RateCommand;
