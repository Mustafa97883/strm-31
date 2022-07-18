const Strom = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  let prefix  = ayarlar.prefix

const yardım = new Strom.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Strom Yardım`)
.setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
**Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
🔧 \`${prefix}ban\:  Belirttiğiniz Üyeyi Sunucudan Yasaklar\`\n
🔧 \`${prefix}nuke\:  Kanaldaki bütün mesajları siler\`\n
🔧 \`${prefix}otorol-sistemi\`otorol komutlarını gösterir\`\n
🔧 \`${prefix}ototag\:  Etiketlediğiniz tagı her gelen üyeye verir\`\n
🔧 \`${prefix}sunucutanıt\:  Sunucunuzu bizim sunucuda tanıtır.\`\n
🔧 \`${prefix}sayaç-ayarla\:  Sunucunuza sayaç ayarlarsınız.\`\n
🔧 \`${prefix}kurallar\:  Sunucu için kurallar atar.\`\n
🔧 \`${prefix}slowmode\:  sohbet kanalına slowmode atarsınız.\`\n
🔧 \`${prefix}servericon\:  sunucu iconunu gösterir.\`\n
🔧 \`${prefix}rank\:  Seviyenizi gösterir.\`\n
🔧 \`${prefix}sohbet-aç\:  sohbet i yazılabilir hale getirir.\`\n
🔧 \`${prefix}sohbet-kapat\:  sohbet i yazılamaz hale getirir.\`\n
🔧 \`${prefix}kick-limit\:  kick limiti ayarlarsınız.\`\n
🔧 \`${prefix}ban-limit\: ban limiti ayarlarsınız.\`\n
🔧 \`${prefix}oylama\: oylama.\`\n
🔧 \`${prefix}çoklu-oylama\:  şıklı oylama.\`\n
🔧 \`${prefix}hesapla\:  Matematik işlemi.\`\n
`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['mod',"moderasyon"], 
  permLevel: 0
};

exports.help = {
  name: "moderasyon-sistemi",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'moderasyonhelp'
};