const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const morfin = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(" Strom Çekiliş 🎉")
    .setDescription(
      `**Selam ${message.author.username} Yardım Listeme Hoşgeldin.**
      
<:tikitenebakyon:829534240877445140>  **Çekiliş Başlatma Komutu = \`\.çekiliş-yap [#Çekiliş_Kanalı] [Zaman] [Kazanacak_Sayı] [Ödül]\`**
<:tikitenebakyon:829534240877445140>  **Çekiliş Yenileme Komutu = \`\.çekiliş-yeniden [Mesaj_ID]\`**
<:tikitenebakyon:829534240877445140>  **Çekiliş Bitirme Komutu = \`\.çekiliş-bitir[Mesaj_ID]\`**
<:tikitenebakyon:829534240877445140>  **Ping/Gecikme Komutu = \`\.ping\`**`
    )
    .setFooter(
      `Strom Çekiliş | ${message.author.username} Tarafından İstendi.`
    );
  message.channel.send(morfin);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"]
};

module.exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};