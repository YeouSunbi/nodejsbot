const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzkzMDg4OTY5MTkzNDIyODg4.X-nLqQ.xorwFbauZzrtJYuNa01TYUtWeLI';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);