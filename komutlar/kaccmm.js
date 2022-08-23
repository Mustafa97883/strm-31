const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.author.id != "846736343593779230") return message.channel.send('Bot Sahibinin özel komudu'); 
  
  
  
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  100CM ** :eggplant: ' ,'**Senin Malafatın  131CM ** :eggplant:' ,'**Senin Malafatın 3131CM sjsj  ** :eggplant:' ,'**Senin Malafatın  1km ** :eggplant:' ,'**Senin Malafatın  80km  ** :eggplant:' ,'**Senin Malafatın  65km  ** :eggplant:' ,'**Senin Malafatın 5km  ** :eggplant:' ,'**Senin Malafatın 31CM  ** :eggplant:' ,'**Senin Malafatın  10000km ** :eggplant:' ,'**Senin Malafatın  312312katrilyonsantim ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
 
      
      }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaccm'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcmm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcmadmin'
};