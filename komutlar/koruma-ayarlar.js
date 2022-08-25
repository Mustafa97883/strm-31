const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`Strom | koruma`)
    .setTitle(``)
    .setColor("RANDOM")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/854450815149277214/74b8c7ed3f881b718c504a44158bff3d.png"
    )
    .setDescription(
      `🔰 Strom  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__ModLog__`,
      `⚙️ \`${prefix}modlog\` Komutla Discord Sunucuza ModLog Kanalını Ayarlarsınız.`,
      true
    )
    .addField(
      `__KüfürEngel__`,
      `⚙️ \`${prefix}küfürengel\` Discord Sunucuna Küfür Etmeye Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Küfür Log__`,
      `⚙️ \`${prefix}küfürlog\` Discord Sunucuna Küfür Edenlerin Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__Reklam Engel__`,
      `⚙️ \`${prefix}reklamengel\` Discord Sunucuna Reklam Yapmaya Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Reklam Log__`,
      `⚙️ \`${prefix}reklamlog\` Discord Sunucuna Reklam Yapmayı Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__BanSay__`,
      `⚙️ \`${prefix}bansay\` Discord Sunucunuzda Toplam Kaç Banlanmış Kişi Var Onu Gösterir.`,
      true
    )
   .addField(
      `__kanal koruma__`,
      `⚙️ \`${prefix}kanal-koruma\` Discord Sunucunuzdaki kanalları korur.`,
      true
    )
   .addField(
      `__antiraid__`,
      `⚙️ \`${prefix}antiraid\` Discord Sunucunuza bot eklerken izin ister.`,
      true
    )
   .addField(
      `__everyonehere koruma__`,
      `⚙️ \`${prefix}everhereengel\` yetkisi olmayan kişiler everyone ve here atamaz.`,
      true
    )
  .addField(
      `__isim reklam koruma__`,
      `⚙️ \`${prefix}isim-reklam-koruma\` Kullanıcının isminde reklam varsa yasaklar.`,
      true
    )
    .addField(
      `__Sohbet aç__`,
      `⚙️ \`${prefix}sohbet-aç\` Komutu Kullandıgınız Kanalda Sohbeti Açar.`,
      true
    )
    .addField(
      `__Sohbet Kapat__`,
      `⚙️ \`${prefix}sohbet-kapat\` Komutu Kullandıgınız Kanalda Sohbeti Kapat.`,
      true
    )
    .addField(
      `__Sil__`,
      `⚙️ \`${prefix}sil\` Yazdıgınız Sayı Kadar Discord Botta O Kadar Mesaj Siler.`,
      true
    )
    .addField(
      `__Güvenlik__`,
      `⚙️ \`${prefix}güvenlik\` Güvenlik Kanalını Ayarlarsın.`,
      true
    )
    .addField(
      `__Güvenlik Sıfırla__`,
      `⚙️ \`${prefix}güvenlik-sıfırla\` Güvenlik Kanalını Sıfırlarsın.`,
      true
    )
   .addField(
      `__ping__`,
      `⚙️ \`${prefix}ping\` Botun geçikme süresine bakarsınız.`,
      true
    )
  .addField(
      `__ping__`,
      `⚙️ \`${prefix}ping\` Botun geçikme süresine bakarsınız.`,
      true
    )
  .addField(
      `__ban sistem__`,
      `⚙️ \`${prefix}ban-sistem\` Ban sistemi ayarlarsınız.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `⏳  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⏳ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n ⏳ \`${prefix}iletişim\` | Strom  İletişim Bilgileri.`
    );
  return message.channel.send(embedayarlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["guard"],
  permLevel: 0
};

exports.help = {
  name: "koruma",
  description: "Ayarlar Menüsü",
  usage: "koruma"
};
