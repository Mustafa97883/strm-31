const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
 const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = [''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
**Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)

**Sunucu-kur Ana Menüsüne Hoş Geldin Dostum :innocent:

${client.user} Kullanırken Botun Özel Rolünü rolünü en yukarıda tutunuz.**
**

🦋 \`s!sunucu-kur-botlist\` botlist sunucusu kurar.

🦋 \`s!sunucu-kur-gelişmiş\` Gelişmiş sunucu kurar.

🦋 \`s!nitro-sunucu-kur\` Nitro Sunucusu Kurar.

🦋 \`s!normal-sunucu-kur\` Normal Sunucusu Kurar.

🔥 \`s!davet\` Menüsün de neler var?


**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setImage(images.random()))
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu-kur', 'sunucu-yardım'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur'
};