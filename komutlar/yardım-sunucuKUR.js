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
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Sunucu-kur Ana Menüsüne Hoş Geldin Dostum :innocent:.
${client.user} Kullanırken Botun Özel Rolünü rolünü en yukarıda tutunuz.**
**
🐝 \`s!sunucu-tema\` Menüsün de neler var?\`\n

> Public, Nitro, Oyun Gibi Sunucların Şablonları


🦋 \`s!sunucu-kur\` Menüsün de neler var?


🦋 \`s!diğer-temalar\` Menüsün de neler var?\`\n

> Mute, Karantina, Ban, Toplu rol, Sayaç \`&\` Oto 
> rol, Kısıtlamalar

🔥 \`s!davet\` Menüsün de neler var?


**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))
 } else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
                             }
        })
      
      },

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yardım-sunucu-kur','ys'],
  permLevel: 0
}

exports.help = {
  name: 'yardım-sunucu-kur'
};