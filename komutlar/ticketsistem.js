const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;


exports.run = async (bot, msg, args, client) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjYwNzM0NTkyfQ.Tci7n9zVPbCAfU70t8CccDiH7lg7pGrvYHnIvRk9f1s', client)
dbl.hasVoted(msg.author.id).then(voted => {
      if(voted) {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`Strom  | Ticket Sistem`)
    .setTitle(``)
   .setImage(
      "https://cdn.discordapp.com/attachments/900043965129191438/1009155611633668146/c10f8dedd93c798ce1e36ad9acb26fd4.png"
    )
    .setColor(`#ee7621`)
     .setThumbnail(
      "https://cdn.discordapp.com/attachments/900043965129191438/1009155611633668146/c10f8dedd93c798ce1e36ad9acb26fd4.png"
    )
    .setDescription(
      `🎫 Strom Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ticket__** `,
      `🎫  \`${prefix}bilet\` \nTicketi tekrar açar. Ticketi siler `,
      true
    )
    .addField(
      `**__Ticket Kapat__**`,
      `🎫  \`${prefix}kapat\` \nTicketi 5 saniyede siler`,
      true
    )
    .addField(
      `**__Ticket Kanal__**`,
      `🎫  \`${prefix}ticket-kanal\` \nTicket Gittiği Kanalı Ayarlar`,
      true
    )
    .addField(
      `**__Ticket Kaldır__**`,
      `🎫  \`${prefix}ticket-kaldır\` \nTicket Kanalını Kaldırır`,
      true
    )
    .addField(
      `**__Ticket Ekle__**`,
      ` 🎫 \`${prefix}ticket-ekle\` \nTicket Ekler`,

      true
    )
    .addField(
      `**__Ticket Aç__**`,
      ` 🎫  \`${prefix}ticket-aç\` \nTicket Açar`,
      true
    
   
    );
  msg.channel.send(çekiliş);

      
     } else {
        msg.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
           .then(Strom => Strom.delete({ timeout: 10000 }));   
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilet-sistem"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "ticket-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: ""
};
 