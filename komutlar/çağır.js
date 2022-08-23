const Discord = require("discord.js")
const css = "https://discord.gg/fr43SS2n64"
const csl = "863868946142461984"

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("**Yetkiniz Yetmiyor!**")
  let csd = client.channels.cache.get(csl)
  const içerik = args.slice(0).join(" ")
  if(!içerik) return message.reply("**Lütfen Neden Talep Açmak İstediğinizide Yazın!\nÖrnek: `s!çağır <sorun>`**")
 
   if(csd){
  const davet = await message.channel.createInvite()

  const embed = new Discord.MessageEmbed()
    .setTitle("Destek Sunucusuna Mesajınız Ulaştı")
    .setDescription("**Destek Sunucum: [Gelmek İçin Tıkla]("+css+")**")
    .setFooter("Uzun Bir Süre Cevap Verilmez ise Destek Sunucusuna Gelin!")
  message.channel.send(embed)

  const invite = new Discord.MessageEmbed()
    .setTitle("Talep Geldi")
    .addField("Kullanıcı Adı", message.author.username + "#" + message.author.discriminator)
   .addField("Kullanıcı id", message.author.id )
    .addField("Sunucu Adı", message.guild.name)
    .setDescription("**Mesaj İçeriği: `"+içerik+"`\n\nDavet Linki: "+davet.url+"**");
  csd.send(invite)
  } else {
  return message.reply("**Talep Gönderimi Başarısız!\nSorun: `Destek Sunucusundaki Log Kanalına Erişemiyorum!`**")
  }
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: "çağır"
}