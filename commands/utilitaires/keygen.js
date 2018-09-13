const commando = require('discord.js-commando');

function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

class KeygenCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'keygen',
            group: 'utilitaires',
            memberName: 'keygen',
            description: 'Je peux générer des clés aléatoires techniquement inviolables. Elles peuvent servir a tester ou a troller. A toi de voir.'
        });
    }

    async run(message, args)
    {
        message.channel.send("Voici une clé de test aléatoire inviolable.")
        message.channel.send(makeid(5) + "-" + makeid(5) + "-" + makeid(5))
    }
}

module.exports = KeygenCommand;
