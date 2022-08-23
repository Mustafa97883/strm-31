const Strom = require('discord.js');
const StromClient = new Strom.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
  
  const StromEmbed = new Strom.MessageEmbed()
  .setColor(0xff000)
 .setAuthor(`${client.user.username} | Strom |`)
 .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
 **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
 
💸 **${Prefix}bilgilerim** \n-> Hesap Bilgisini Gösterir
💸 **${Prefix}bakiye** \n-> Bakiyeyi Gösterir
💸 **${Prefix}günlükpara** \n->  Günlük Para Ödülü Alırsın
💸 **${Prefix}hesap-oluştur** \n->  Hesap Oluşturursun
💸 **${Prefix}hesap-sil** \n->  Hesap Silersin
💸 **${Prefix}kasa-aç** \n->  Kasa Açarsın
💸 **${Prefix}kasa-bilgi** \n->  Kasalar Hakkında Bilgi Alırsın
💸 **${Prefix}transfer** \n->  Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin
💸 **${Prefix}kasaaç <Kasaid>** \n->  Belirtilen İD'ye Sahip Kasayı Açarsın



`)
 

 .setFooter(`Strom`)
 .setTimestamp()
 message.channel.send(StromEmbed)

      },





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kasa-yardım"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kasa-yardım',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};