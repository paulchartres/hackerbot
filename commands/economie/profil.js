const commando = require('discord.js-commando');
const users = require("../models/users.js");
const mongoose = require("mongoose");
mongoose.connect('mongodb://paulchartres:ONCHE1234@ds257372.mlab.com:57372/hackerbot')

class ProfilCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'profil',
            group: 'economie',
            memberName: 'profil',
            description: 'Je peux te donner accès à ton profil sur ce serveur. Ce sont des documents top secret.'
        });
    }

    async run(message, args)
    {
        message.reply('ta gueule.')
    }
}

module.exports = DespacitoCommand;
