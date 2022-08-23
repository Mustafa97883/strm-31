const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
 
  
  const embed = new Strom.MessageEmbed()
    .setAuthor(
      `${client.user.username} `,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("#d02090")
    .setTitle(` **Strom Bot Kayıt Menüsüne Hoşgeldiniz** `)
    .setDescription(`**Bota Oy Vermek için** [TIKLA](https://top.gg/bot/756883309270663229/vote)
  **Bota yorum atıp 5 yıldız vermeyi unutma :)** [TIKLA](https://top.gg/bot/756883309270663229)
  **Strom Müzik botunu eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=854122011151826975&permissions=8&scope=bot%20applications.commands)
  
  **s!erkek-rol**  \`erkek-rol.\` \n
  **s!kız-rol**  \`kız rolünü ayarlar.\` \n
  **s!alınacak-rol**  \`Kayıt Olunca Alınacak Rolü Ayarlar örn: Kayıtsız üye.\`\n
  **s!kayıt-kanal**  \`Kayıt kanalı ayarlarsınız.\` \n
  **s!kayıt-rol**  \`Kayıt görevlisini ayarlar.\` \n
  **s!kayıtırol-sıfırla**  \`Kayıt görevlisini sıfırlar.\` \n
  **s!kayıt-ver**\`Kayıt yetkisi verir.\`\n
  **s!erkek**\`erkek olarak kayıt eder. \`\n
  **s!kız**\`kız olarak kayıt eder.\` \n
`
    
    
  )
    .setFooter( "Strom / Discord'da Yeni Devrim \nherhangi bir hatada s!hata (hata)\nönerileriniz için s!öneri (öneriniz)", client.user.avatarURL())
  return message.channel.send(embed);

      
      
      }

  
  
  
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtyardım","kayıt-yardım","kayıt-sistem"],
  permLevel: 0
};

exports.help = {
  name: "kayıt-yardım",
  description: "a!davet-sistemi Menüsü",
  usage: "kayıt-yardım"
};
