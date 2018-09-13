const Commando = require('discord.js-commando');
const bot = new Commando.Client();

const prefix = '$';

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === '$despacito') {
    	message.reply('ta gueule.');
  	}
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);

