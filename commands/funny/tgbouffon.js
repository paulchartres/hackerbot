const commando = require('discord.js-commando');

class TGCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'tgbouffon',
            group: 'funny',
            memberName: 'tgbouffon',
            description: 'Commande spécialement dédiée à Lucas.'
        });
    }

    async run(message, args)
    {
        var user_table = ["489432248978767913","230006746268172288","310718662833078273","325685742388903937","245253357470482432","210838704078454784","326745518610972673","489712371833634817","367717830017417228","408353919480102922","373078553509756928","490082354782797826","188295851813109760","320541819828043776","489716604066594816","198095655271530496","489686175573868544","443437769126051841"];
        var randomuser = Math.floor(Math.random() * user_table.length);
        message.channel.send('<@' + user_table[] + '>, ta gueule, bouffon.');
    }
}

module.exports = TGCommand;
