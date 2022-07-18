const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";

exports.run = async (client, message, args) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  var prefix = ayarlar.prefix;


  const embed = new Strom.MessageEmbed()
    .setAuthor(
      `${client.user.username} `,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("#d02090")
    .setTitle(` **Strom Bot eğlence-yardım Menüsüne Hoşgeldiniz** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
    **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
    **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
    
  **<a:rainbow:855248569136578570> ${prefix}aşkölçer** \`Etiketlediğiniz kişi ile aşkınızı ölçer.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}benimki**  \`komik bir foto atar.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}manzara**  \`güzel bir manzara.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}hapishane**  \`pp nizi hapise koyar.\` \n
  **<a:rainbow:855248569136578570> ${prefix}kaçcm**  \`Kaç santim malafatın var Bi bak istersen.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}kapaklaf**  \`Etiketlediğiniz kişiye laf sokar.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}missionfailed**\`Görev başarısız .\`  \n*
  **<a:rainbow:855248569136578570> ${prefix}missionpassed**\`Görev başarılı. \`  \n
  **<a:rainbow:855248569136578570> ${prefix}adamasmaca**\`adamasmaca oyununu oynarsınız.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}şifre**\`Bot size dm den random şifre atar ve kırılması imkansız'dır.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}anime**\`Anime Font.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}ara155**\`polisi arar :).\`  \n
  **<a:rainbow:855248569136578570> ${prefix}green**\`yeşil bir logo atar.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}alev**\`Alevli bir logo atar.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}altın**\`Altın bir logo atar.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}arrow**\`Arrow Ne yazacağımı bulamadım :).\`  \n
  **<a:rainbow:855248569136578570> ${prefix}basit**\`Basıt bir logo.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}elmas**\`Dinamik bir logo.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}elmas**\`Elmas lı bir logo.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}habbo**\`habbo lu bir logo.\`  \n
  **<a:rainbow:855248569136578570> ${prefix}banner**\`Banner oluşturur.\`  \n
`
    
    
  )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  return message.channel.send(embed);
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0
};

exports.help = {
  name: "eğlence-yardım",
  description: "a!davet-sistemi Menüsü",
  usage: "yardım"
};
