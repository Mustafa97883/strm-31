const Strom = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {

  let prefix  = ayarlar.prefix

const yardım = new Strom.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Strom Guard Sistemi`)
.setAuthor(``)
.setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
**Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
🔰 \`${prefix}kanal-koruma\` : **Kanal Koruma Aç/Kapat**
🔰 \`${prefix}küfür-engel\`:  **Küfür Engel Aç/Kapat**
🔰 \`${prefix}reklam-log\` :  **küfür log kanalı açarsınız**
🔰 \`${prefix}reklam-engel\` :  **Reklam Engel Aç/Kapat**
🔰 \`${prefix}Antiraid\` :  **Antiraid sistemini Açıp Kapatırsınız**
🔰 \`${prefix}caps-engel\` :  **Büyük harf engeli**
🔰 \`${prefix}spam-engel\` :  **Spam yapanları durdurur**
🔰 \`${prefix}spam-kapat\` :  **Spam engeli kapatırsınız**
🔰 \`${prefix}everhereengel\` :  **@everyone @here engeli atar**
🔰 \`${prefix}isim-reklam-koruma\`:  **Kullanıcının isminde reklam varsa onu sunucudan banlar**
🔰 \`${prefix}sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
🔰 \`${prefix}ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
🔰 \`${prefix}unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
🔰 \`${prefix}istatistik\`:  **Botun İstatistiklerini Atar**
🔰 \`${prefix}temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
🔰 \`${prefix}ping\`:  **Pinginizi Ölçüp Atar**
🔰 \`${prefix}mute-sistemi**  \`İlk Olarak Kurulum Yapınız**
🔰 \`${prefix}Mod-log**  \`Sunucuda silinen msj vs.. kanala atar.**

`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   

      
      }
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['guardyardım','guard',"koruma"], 
  permLevel: 0
};

exports.help = {
  name: "guard-sistemi",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'guardhelp'
};