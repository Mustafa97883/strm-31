const Strom = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Strom.MessageEmbed() 
        
        .setTitle(`${client.user.username} DAVET SİSTEMİ `)
        .setDescription(`💼 **Destek Sunucusu** [TIKLA](https://discord.gg/fr43SS2n64) 
        
       🔰 **Yapımcı** : <@846736343593779230>
       🔰 **Geliştirici** <@468501741558693889> 
       🔰 **Destekçi** : <@623973913415647292>
        
        
        `)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}iletişim komutunu Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'iletişim',
  description: '',
  usage: 'iletişim'
};
