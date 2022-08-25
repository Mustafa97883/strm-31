const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Strom   | Ban ve kick Sistem`)
    .setTitle(``)
    .setColor("RANDOM")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/854450815149277214/74b8c7ed3f881b718c504a44158bff3d.png"
    )
    .setDescription(
      `📛 Strom  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ban__**`,
      `🔒 \`${prefix}ban\` \n Discord Sunucundan Bir Kişiyi Banlarsın.`,
        true
    )
     .addField(
      `**__Ban Log__**`,
      `🔒 \`${prefix}ban-log\` \n Discord Sunucunda Bir Ban Log Kanalı Ayarlarsın.`,
        true
    )
     .addField(
      `**__Ban yetkili__**`,
      `🔒 \`${prefix}ban-yetkili\` \n Discord Sunucunda Bir Ban Yetkili Rölü Ayarlarsın.`,
        true
    )
   .addField(
      `**__kick__**`,
      `🔒 \`${prefix}kick\` \n Discord Sunucundan Bir Kişiyi kicklersin.`,
        true
    )
  .addField(
      `**__kick log__**`,
      `🔒 \`${prefix}kick-log\` \n Discord Sunucunda Bir Kick Log Kanalı Ayarlarsın.`,
        true
    )
  .addField(
      `**__kick yetkili__**`,
      `🔒 \`${prefix}kick\` \n Discord Sunucunda Bir Kick Yetkili Rölü Ayarlarsın.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `📌  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 📌 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 📌 \`${prefix}iletişim\` | Strom  İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"ban-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
