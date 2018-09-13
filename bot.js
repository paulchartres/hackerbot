const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('funny', 'Inutile');
bot.registry.registerGroup('reactions', 'Réactions');
bot.registry.registerGroup('traduction', 'Traduction');
bot.registry.registerGroup('music', 'Musique');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready', () => {
    console.log('I am ready!');
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
