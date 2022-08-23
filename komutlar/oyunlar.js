const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const sunucu = new Discord.MessageEmbed()
    .setAuthor(`Strom  | oyunlar`)
    .setTitle(``)
    .setColor("RANDOM")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/854450815149277214/74b8c7ed3f881b718c504a44158bff3d.png"
    )
    .setDescription(
      ` 🔌  Strom  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__1vs1__`,
      `🎮 \`${prefix}1vs1\` Etiketlenen kullanıcı ile 1vs1 savaşırsınız`,
      true
     )
    .addField(
      `__xox__`,
      `🎮 \`${prefix}xox\` Etiketlenen kullanıcı ile xox oynarsınız`,
      true
     )
  .addField(
      `__yazankazanır__`,
      `🎮 \`${prefix}yazankazanır\` Etiketlenen kullanıcı ile yazankazanır oynarsınız`,
      true
     )
    .addField(
      `__adamasmaca__`,
      `🎮 \`${prefix}adamasmaca\` adamasmaca oynarsınız`,
      true
     )
    .addField(
      `__kasa-yardım__`,
      `🎮 \`${prefix}kasa-yardım\` kasa komutlarını gösterir`,
      true
     )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔱 \`${prefix}iletişim\` | Strom  İletişim Bilgileri.`
    );
  return message.channel.send(sunucu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "oyunlar",
  description: "Yardım Menüsü",
  usage: "yardım"
};
