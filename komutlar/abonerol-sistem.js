const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = async (bot, msg, args, client) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjYwNzM0NTkyfQ.Tci7n9zVPbCAfU70t8CccDiH7lg7pGrvYHnIvRk9f1s', client)
dbl.hasVoted(msg.author.id).then(voted => {
      if(voted) {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Strom  | AboneRol Sistem`)
    .setTitle(``)
    .setColor("RANDOM")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/854450815149277214/74b8c7ed3f881b718c504a44158bff3d.png"
    )
    .setDescription(
      `💠 Strom  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Abone__**`,
      `🔸 \`${prefix}abone\` \n Youtubunuza Abone Olan Kişiye Abone Rol Verir.`,
        true
    )
     .addField(
      `**__Abone Yetkili__**`,
      `🔸 \`${prefix}abone-yetkili\` \n Abone Rölünü Verecek Kişinin AboneRol Yetkilisini Ayarlar.`,
        true
    )
     .addField(
      `**__Abone Rol__**`,
      `🔸 \`${prefix}abonerol\` \n Abone Olan Kişiye Verilecek Rölü Ayarlama.`,
        true
    )
   .addField(
      `**__Abone Log__**`,
      `🔸 \`${prefix}abonelog\` \n Abone Rölü Verecek Kişinin Verdigi Mesaj Logu Ayarlarsın`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `🌀  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🌀 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🌀 \`${prefix}iletişim\` | Strom  İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
} else {
        msg.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              .then(Strom => Strom.delete({ timeout: 10000 }));
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"abonerol-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
