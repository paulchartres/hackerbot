const commando = require('discord.js-commando');

class AskCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ask',
            group: 'funny',
            memberName: 'ask',
            description: 'En tant que hacker, j\'ai réponse à tout. Poses moi une question, vas-y.'
        });
    }

    async run(message, args)
    {
        var randomanswer = Math.floor(Math.random() * 20) + 1

        if (args !== '')
        {
            if (randomanswer === 1)
            {
                message.channel.send('Oui.')
            }
            else if (randomanswer === 2)
            {
                message.channel.send('Bien sûr.')
            }
            else if (randomanswer === 3)
            {
                message.channel.send('Sans aucun doute.')
            }
            else if (randomanswer === 4)
            {
                message.channel.send('Est-ce que je dois vraiment répondre ?')
            }
            else if (randomanswer === 5)
            {
                message.channel.send('Selon toi ?')
            }
            else if (randomanswer === 6)
            {
                message.channel.send('Je ne crois pas, non.')
            }
            else if (randomanswer === 7)
            {
                message.channel.send('Tu croyais vraiment que j\'allais dire oui ?')
            }
            else if (randomanswer === 8)
            {
                message.channel.send('Haha... non.')
            }
            else if (randomanswer === 9)
            {
                message.channel.send('Bien sûr que non.')
            }
            else if (randomanswer === 10)
            {
                message.channel.send('Non.')
            }
            else if (randomanswer === 11)
            {
                message.channel.send('Évidemment.')
            }
            else if (randomanswer === 12)
            {
                message.channel.send('Aucune idée.')
            }
            else if (randomanswer === 13)
            {
                message.channel.send('Pourquoi ce serait pas le cas?')
            }
            else if (randomanswer === 14)
            {
                message.channel.send('Je suppose que oui.')
            }
            else if (randomanswer === 15)
            {
                message.channel.send('Probablement pas, non.')
            }
            else if (randomanswer === 16)
            {
                message.channel.send('Sûrement.')
            }
            else if (randomanswer === 17)
            {
                message.channel.send('Je suis quasiment sûr que oui.')
            }
            else if (randomanswer === 18)
            {
                message.channel.send('Pas du tout...')
            }
            else if (randomanswer === 19)
            {
                message.channel.send('Bien sûr que oui, tu m\'as pris pour qui?')
            }
            else if (randomanswer === 20)
            {
                message.channel.send('Hmm... Non, je suppose.')
            }
        }
        else
        {
          message.channel.send('Je ne peux pas répondre si tu ne me poses pas de question.')
        }
    }
}

module.exports = AskCommand;
