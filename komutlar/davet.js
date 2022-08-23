const Strom = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Strom.MessageEmbed() 
        
        .setTitle(`${client.user.username} DAVET SİSTEMİ `)
        .setDescription(`💼 **Botun Davet Linki İçin** [TIKLA](https://discord.com/api/oauth2/authorize?client_id=756883309270663229&permissions=8&scope=bot) \n **Destek Sunucusu İçin** [TIKLA](https://discord.gg/fr43SS2n64)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
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
  name: 'davet',
  description: '',
  usage: 'davet'
};
