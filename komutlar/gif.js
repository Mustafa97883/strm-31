const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedeğlence = new Discord.MessageEmbed()
    .setAuthor(`Strom | Gif`)
    .setTitle(``)
    .setColor(`RANDOM`)
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/854450815149277214/74b8c7ed3f881b718c504a44158bff3d.png"
    )
    .setDescription(
      `🔔 Strom  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__gif animal__`,
      `📯 \`${prefix}gif-animal \` Hayvan gifi atar.`,
      true
    )
  .addField(
      `__gif anime__`,
      `📯 \`${prefix}gif-anime\` Anime gifi atar.`,
      true
    )
    .addField(
      `__gif baby__`,
      `📯 \`${prefix}gif-baby \` Bebek gifi atar.`,
      true
    )
    .addField(
      `__gif couple__`,
      `📯 \`${prefix}gif-couple \` sevgili gifi atar.`,
      true
    )
    .addField(
      `__gif man__`,
      `📯 \`${prefix}gif-man \` Erkek gifi atar.`,
      true
    )
  .addField(
      `__gif women__`,
      `📯 \`${prefix}gif-woman \` Kadın gifi atar.`,
      true
    )
   .addField(
      `__gif marvel__`,
      `📯 \`${prefix}gif-marvel \` Marvel gifi atar.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `📙 \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 📙 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 📙 \`${prefix}iletişim\` | Strom İletişim Bilgileri`
    );
  return message.channel.send(embedeğlence);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gif-yardım"],
  permLevel: 0
};

exports.help = {
  name: "gif",
  description: "Eğlence Menüsü",
  usage: "gif"
};
