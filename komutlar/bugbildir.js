const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  const db = require('quick.db')
let p = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("• Hata: 0014 •")
.setDescription("Hata bildirebilmek için hatayı yazmalısın.")
.setFooter(`©️ Tüm hakları saklıdır. | 2022`);

const onerili = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Başarılı")
.setDescription("Hatanız alınmıştır! Teşekkür ederiz.")
.setFooter(`©️ Tüm hakları saklıdır. | 2022`);  


  var hata = args.slice(0).join(" ");

  var guildID = "796388765257695273"; // Sunucu ID

  var channelID = "997597475957387274"; // Kanal ID

  if (!hata) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()

      .setTimestamp()

      .setColor("RANDOM")

      .setAuthor("👤 Hata!", client.user.avatarURL())
      .addField("👤 Hatayı Bildiren Kullanıcı:", message.author.tag, true)
      .addField("👤 Hatayı Bildiren Kullanıcı ID:", message.author.id,true)
      .addField("📜 Hata:", hata)


    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["hata"],
permlevel: 0
};
exports.help = {
  name: "hata-bildir"
};