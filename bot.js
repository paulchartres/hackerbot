const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client();
const client = new Discord.Client();

var anti_spam = require("discord-anti-spam");

bot.registry.registerGroup('funny', 'Inutile');
bot.registry.registerGroup('reactions', 'Réactions');
bot.registry.registerGroup('traduction', 'Traduction');
bot.registry.registerGroup('music', 'Musique');
bot.registry.registerGroup('utilitaires', 'Utilitaires');
bot.registry.registerGroup('economie', 'Économie/Profil');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

antispam(client, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "stop spamming or I'll whack your head off.", // Warning message send to the user indicating they are going to fast.
  banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
  deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.
});

bot.on('ready', function(){
    bot.user.setActivity('hacker le FBI').catch(console.error)
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
