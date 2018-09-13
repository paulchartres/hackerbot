const commando = require('discord.js-commando');

var reponses_flirt = ['C\'est gênant.','C\'est déplaisant.','Attends, quoi? Ici? Maintenant?','Je suis déjà pris.','Autant sortir avec une betterave.','Sérieusement? :rolling_eyes:','On peut rester amis?','Pas ici.','Je sais que tu es en manque d\'affection, mais... Non.','Arrêtes d\'essayer.','On peut reprendre ça plus tard?','Je suis occupé à hacker le FBI, là.','...Et si on oubliait ce qui vient de se passer?','Je le prends comme un compliment.','Quoi? Tu m\'as pris pour qui?','Je suis touché.','Ah... Tu veux pas plûtot aller m\'acheter des chips ?','Kung Furher a plus de charisme que toi.']

class FlirtCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flirt',
            group: 'funny',
            memberName: 'flirt',
            description: 'Te permet de flirter avoir moi. C\'est assez consternant.'
        });
    }

    async run(message, args)
    {
        var randomreponse = Math.floor(Math.random() * reponses_flirt.length)
        message.channel.send(reponses_flirt[randomreponse])
    }
}

module.exports = FlirtCommand;
