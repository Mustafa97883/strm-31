const Discord = require('discord.js')
const db = require("quick.db");
exports.run = async(client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  let limit = args.slice(0).join(' ')
  
  if (!limit) return message.channel.send(`Lütfen Limit Belirt.`)
  if (isNaN(limit)) return message.channel.send('ban Limiti Sadece Sayılardan Oluşabilir! Lütfen Sayıyı Harflerle Yazmayı Deneme :D')
  
  db.set(`banlimit_${message.guild.id}`, limit)
message.channel.send(`Ban Limiti **${limit}** Olarak Ayarlandı! Limiti Geçeni Döverim.`)
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
exports.conf = {
  aliases: ['ban-limit'],
  permLevel: 4
};
exports.help = {
  name: 'banlimit'
}; 