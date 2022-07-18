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
.setAuthor(`Strom jail Sistemi`)
.setAuthor(``)
.setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
**Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
👮 \`${prefix}jail\` : **Bir kişiyi belirlediğiniz rol ile jaile yollarsınız**
👮 \`${prefix}jail-kanal\`:  **Birisi jaile atılınca hangi kanala mesaj atılacağını ayarlarsınız**
👮 \`${prefix}jail-rol\` :  **Birisi jaile atılınca hangi role sahip olacağını ayarlarsınız**
👮 \`${prefix}jail-yetkilisi\` :  **Hangi role sahip kişilerin jaile atabileceğini ayarlarsınız**

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
  aliases: ['jailyardım','jail-yardım'], 
  permLevel: 0
};

exports.help = {
  name: "jail-sistemi",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'guardhelp'
};