const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
 const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  const embed = new Strom.MessageEmbed()
    .setAuthor(
      `${client.user.username} `,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("#d02090")
    .setTitle(` **Strom Bot Yardım Menüsüne Hoşgeldiniz** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
  **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
  <a:rainbow:855248569136578570> **s!uyarı**  \`bir kullanıcıya uyarı puanı verirsiniz..\` \n
  <a:rainbow:855248569136578570> **s!uyarı-sil**  \`bir kullanıcıdan uyarı puanı silersiniz.\` \n
  <a:rainbow:855248569136578570> **s!uyarılar**  \`bir kullanıcının uyarılarına bakarsınız.\`\n
  <a:rainbow:855248569136578570> **s!sicil**  \`bir kullanıcının siciline bakarsınız.\` \n
  <a:rainbow:855248569136578570> **s!mute**  \`bir kullanıcıyı susturursunuz.\` \n
  <a:rainbow:855248569136578570> **s!muterol**\`mute rolu ayarlarsınız.\`\n
  <a:rainbow:855248569136578570> **s!kurallar**\`sunucu kuralı eklersiniz. \`\n
  <a:rainbow:855248569136578570> **s!kick-limit**\`kick limiti belirlersiniz.\` \n
  <a:rainbow:855248569136578570> **s!ban-limit**\`ban limiti belirlersiniz.\` \n
`
    
    
  )
    .setFooter( "Strom / Discord'da Yeni Devrim!", client.user.avatarURL())
  return message.channel.send(embed);

      
      } else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
                             }
        })
      
      },


  
  
  
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetkiliyardım","yetkili-yardım"],
  permLevel: 0
};

exports.help = {
  name: "yatkili-yardım",
  description: "a!davet-sistemi Menüsü",
  usage: "yetkili-yardım"
};
