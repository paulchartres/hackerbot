const commando = require('discord.js-commando');

var chuckfacts = ["Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.","Google, c'est le seul endroit où tu peux taper Chuck Norris.","Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.","Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.","Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon.","Chuck Norris ne se mouille pas, c'est l'eau qui se Chuck Norris.","Chuck Norris peut gagner une partie de puissance 4 en trois coups.","Un jour, Chuck Norris a perdu son alliance. Depuis c'est le bordel dans les terres du milieu.","Jesus Christ est né en 1940 avant Chuck Norris.","Chuck Norris ne porte pas de montre. Il décide de l'heure qu'il est.","La seule chose qui arrive à la cheville de Chuck Norris... c'est sa chaussette.","Chuck Norris fait pleurer les oignons.","Dieu a dit: que la lumiere soit! et Chuck Norris a répondu: On dit s'il vous plait.","Chuck Norris peut diviser par zéro.","Chuck Norris comprend Jean-Claude Van Damme.","Chuck Norris joue à la roulette russe avec un chargeur plein.","Chuck Norris sait parler le braille.","Chuck Norris a un jour avalé un paquet entier de somnifères. Il a cligné des yeux.","Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.","Les suisses ne sont pas neutres, ils attendent de savoir de quel coté Chuck Norris se situe.","Il n'y a pas de théorie de l'évolution. Juste une liste d'espèces que Chuck Norris autorise à survivre.","Chuck Norris peut encercler ses ennemis. Tout seul.","Chuck Norris est la raison pour laquelle Charlie se cache.","Chuck Norris a déjà été sur Mars, c'est pour cela qu'il n'y a pas de signes de vie là bas.","Chuck Norris mesure son pouls sur l'échelle de Richter.","Chuck Norris connait la dernière décimale de Pi.","Un jour, au restaurant, Chuck Norris a commandé un steak. Et le steak a obéi.","Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo.","Chuck Norris n'utilise pas de suppositoire. Les voies du seigneur sont impénétrables.","Chuck Norris peut t'étrangler avec un téléphone sans fil.","Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.","Chuck Norris mange les emballages des carambars. On ne blague pas avec Chuck Norris.","Chuck Norris peut taguer le mur du son.","Chuck Norris peut te faire passer un sale quart d'heure en 8 minutes.","Quand Chuck Norris pisse face au vent, le vent péfère changer de direction.","Chuck Norris aime la vie. Une chance pour elle.","Chuck Norris sera déclaré recordman du lancer du poids le jour où le poids retombera.","Chuck Norris a fini Super Mario Bros sans sauter.","Quand la tartine de Chuck Norris tombe, la confiture change de côté.","Chuck Norris peut faire des tacles au babyfoot.","A l'école, c'est le professeur qui devait lever la main pour parler a Chuck Norris.","Chuck Norris est capable de laisser un message avant le bip sonore.","Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.","Dieu voulait créer l'univers en 10 jours. Chuck Norris lui en a donné 6.","Chuck Norris enfant n'envoyait pas de lettres au Père Noël. Il envoyait des ultimatums.","Jésus a marché sur l'eau, mais Chuck Norris a marché sur Jésus.","Chuck Norris a tué son ombre. On ne suit pas Chuck Norris .","Chuck Norris ne ment pas, c'est la vérité qui se trompe."]

class ChuckCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'chuck',
            group: 'funny',
            memberName: 'chuck',
            description: 'De temps en temps, on se doit de faire une petite prière pour Dieu Chuck Norris. Utilises cette commande pour avoir un psaume Norrissique à vénérer.'
        });
    }

    async run(message, args)
    {
        var random_chuck = Math.floor(Math.random() * chuckfacts.length)
        message.channel.send(chuckfacts[random_chuck])
    }
}

module.exports = ChuckCommand;
