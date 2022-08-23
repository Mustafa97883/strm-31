const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`Strom  | Genel`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/854450815149277214/74b8c7ed3f881b718c504a44158bff3d.png"
    )
    .setDescription(
      `🌀 Strom  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Oylama__`,
      ` 🚩  \`${prefix}oylama\` Sunucudan Bir Oylama Başlatırsın.`,
      true
    )
    .addField(
      `__Toplam Komut__`,
      ` 🚩  \`${prefix}komutlar\` Discord Botta Toplam Kaç Komut Var Ona Bakarsın.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      ` 🚩  \`${prefix}botbilgi\` Botun Sunucu Ve Sürüm , Sahip İstatistikleri Bakarsın.`,
      true
    )
    .addField(
      `__Davet__`,
      ` 🚩   \`${prefix}davet\` Strom Davet Menüsünü Görürsün.`,
      true
    )
  .addField(
      `__sunucutanıt__`,
      ` 🚩   \`${prefix}sunucutanıt\` Sunucunuzu Destek sunucusunda tanıtır.`,
      true
    )
    .addField(
      `__Ping__`,
      ` 🚩  \`${prefix}ping\` Discord Botun Mesaj Geçikmesi ve Bot Geçikmesini Gösterir.`,
      true
    )
    .addField(
      `__AFK__`,
      ` 🚩  \`${prefix}afk\` Kullanıcı Bir Sebeple AFK Moduna Girer.`,
      true
    )
   .addField(
      `__V11 To V12__`,
      ` 🚩 \`${prefix}çevir\` Disord Botlara Koyulan V11 Kodu V12 Çevirebilirsiniz.`,
      true
    )
     .addField(
      `__Say__`,
      ` 🚩  \`${prefix}say\` Toplam Kanal Seviyeni Gösteren Gelişmiş Say Komutu.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      ` 🚩  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⚠️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n ⚠️ \`${prefix}iletişim\` | Strom  İletişim Bilgileri.`
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "genel",
  description: "Genel Menüsü",
  usage: "genel"
};
