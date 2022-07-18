const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {  
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  if (!args[0]) return message.reply({embed:{description:'Lütfen bir şablon linki belirt.'}})

    const link = args[0];
    const açıklama = args.slice(1).join(" ") 
    if (!link.includes("https://discord.new")) return message.channel.send(new Discord.MessageEmbed().setColor('#ff0004').setTitle(`İşlem Başarısız`).setDescription(`<a:arp:855388529055629323> ${message.author}, **Lütfen Geçerli Bir Şablon Link Belirtin!**`))
  
    const gönderildi = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .setDescription(`<a:tik:855388519841005569> Desteklerinizden Dolayı Teşekkür Ederiz. Uygun görülürse Bota Eklenicektir.`)
    .setColor("#2bfe0f")
    message.channel.send(gönderildi)

    const embed = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .addField("Şablonu Gönderen \n", message.author)
    .addField(`Gönderilen Şablon\n`, `${link}`)
    .addField(`Açıklama \n`, `${açıklama}`)
    .setFooter("Serves Şablonu | Strom Şablon sistemi")
    .setColor("#000000")
    client.channels.cache.get("860518601768435723").send(embed)
     } else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
                             }
        })
      
      },
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["g","send","şablon-gönder"],
  permLevel: 0
};
exports.help = {
  name: "gönder",
  description: "k",
  usage: "gönder"
};