const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '$';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zbeub') {
    	message.reply('zbeub');
  	}
    if (message.startsWith(prefix + "despacito")) {
        message.channel.send("Ta gueule.");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
