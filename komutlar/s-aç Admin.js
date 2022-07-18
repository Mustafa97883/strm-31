const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name ==='@member')
  message.channel.createOverwrite(every, {
  'SEND_MESSAGES': true,
 
})
  if (message.author.id !== "846736343593779230") return message.channel.send(":no_entry: Bu komutu bot sahibine özeldir.\n sizin kullanacağınız s!sohbet-aç/sohbet-kapat");

   message.channel.send('Sohbet kanalı ``Yazılabilir`` durumuna getirildi.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aç'],
kategori: '',
  permLevel: 3
};

exports.help = {
  name: 'sohbet-aç-admin',
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};
