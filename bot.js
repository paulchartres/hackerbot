const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('funny', 'Inutile');
bot.registry.registerGroup('reactions', 'Réactions');
bot.registry.registerGroup('traduction', 'Traduction');
bot.registry.registerGroup('music', 'Musique');
bot.registry.registerGroup('utilitaires', 'Utilitaires');
bot.registry.registerGroup('economie', 'Économie/Profil');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready', function(){
    bot.user.setActivity('hacker le FBI').catch(console.error)
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
