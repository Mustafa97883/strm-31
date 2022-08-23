const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  let every = message.guild.roles.cache.find(r => r.name === '@everyone','@member')
  message.channel.createOverwrite(every, {
  'SEND_MESSAGES': true,
 
})
 

   message.channel.send('Sohbet kanalı ``Yazılabilir`` durumuna getirildi.');

      }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
kategori: '',
  permLevel: 3
};

exports.help = {
  name: 'sohbet-aç',
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};
