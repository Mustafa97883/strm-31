const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {

  
  
  message.channel.send(new Discord.MessageEmbed()
.setColor('#00001')
.setTitle('Strom')
.setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
**Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
**${client.user.username} Sizlere hizmet vermekten şeref duyar..**

İçerikler de birden fazla tema var.

\`s!j4j-tema\` 
**Hazır __join 4 join__ sunucu teması yollar**

\`s!public-tema\` 
**Hazır karışık __public__ sunucu teması yollar**

\`s!oyun-tema\` 
**Hazır __oyun__ sunucu teması yollar**

\`s!gif-tema\` 
**Hazır gif share sunucu teması yollar**

\`s!sunucu-kur\` 
**Klasik oyun & sohbet sunucusu kurar**

\`\`\`Birini seç\`\`\``)
.setThumbnail(''));
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
                             }
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu-tema'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-tema-sistem'
};