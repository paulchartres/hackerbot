const Discord = require('discord.js');
const Commando = require('discord.js-commando);
const client = new Discord.Client();
const bot = new Commando.Client();

const prefix = '$';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$despacito') {
    	message.reply('ta gueule.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
