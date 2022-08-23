const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";

exports.run = async (client, message, args) => {
  
  
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
    
  🎡 ${prefix}aşkölçer** \`Etiketlediğiniz kişi ile aşkınızı ölçer.\`  \n
  🎡 ${prefix}benimki**  \`komik bir foto atar.\`  \n
  🎡 ${prefix}manzara**  \`güzel bir manzara.\`  \n
  🎡 ${prefix}hapishane**  \`pp nizi hapise koyar.\` \n
  🎡 ${prefix}kaçcm**  \`Kaç santim malafatın var Bi bak istersen.\`  \n
  🎡 ${prefix}kapaklaf**  \`Etiketlediğiniz kişiye laf sokar.\`  \n
  🎡 ${prefix}adamasmaca**\`adamasmaca oyununu oynarsınız.\`  \n
  🎡 ${prefix}şifre**\`Bot size dm den random şifre atar ve kırılması imkansız'dır.\`  \n
  🎡 ${prefix}anime**\`Anime Font.\`  \n
  🎡 ${prefix}ara155**\`polisi arar :).\`  \n
  🎡 ${prefix}green**\`yeşil bir logo atar.\`  \n
  🎡 ${prefix}alev**\`Alevli bir logo atar.\`  \n
  🎡 ${prefix}altın**\`Altın bir logo atar.\`  \n
  🎡 ${prefix}arrow**\`Arrow Ne yazacağımı bulamadım :).\`  \n
  🎡 ${prefix}basit**\`Basıt bir logo.\`  \n
  🎡 ${prefix}elmas**\`Dinamik bir logo.\`  \n
  🎡 ${prefix}elmas**\`Elmas lı bir logo.\`  \n
  🎡 ${prefix}habbo**\`habbo lu bir logo.\`  \n
  🎡 ${prefix}banner**\`Banner oluşturur.\`  \n
`
    
    
  )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  return message.channel.send(embed);

      
      }
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
