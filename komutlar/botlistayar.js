const Discord = require('discord.js');
const db = require('quick.db');


exports.run = function(client, message, args) {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjYwNzM0NTkyfQ.Tci7n9zVPbCAfU70t8CccDiH7lg7pGrvYHnIvRk9f1s', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                          .setTitle("Doğru Kullanım:")
                                          .setDescription(`
                                          > ⚫ **• \`s!botlist-ayar botekle-kanal #kanal\` => Bot Ekleme Kanalını Ayarlarsınız.**
                                          > ⚫  **• \`s!botlist-ayar botlog-kanal #kanal\` Bot Log Kanalını Ayarlarsınız.**
                                          
                                          > ⚫ **• \`s!botlist-ayar başvurugiden-kanal #kanal\` Başvuru Logunu Ayarlarsınız.**
                                          
                                          > ⚫  **• \`s!botlist-ayar yetkili @rol\` Botlist Yetkili Rolünü Ayarlarsınız.**
                                          
                                          \`\`\`Strom.\`\`\``)
                                          .setColor(message.guild.me.displayColor)
                                          )
  if(args[0] === "botekle-kanal"){
    if(db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!botlist-ayar sıfırla**")
    let botekle = message.mentions.channels.first();
    if(!botekle) return message.channel.send("Lütfen kanal seçin")
    db.set(`bot-ekle_${message.guild.id}`, botekle.id)
    message.channel.send("Bot-ekle kanalı başarıyla ayarlandı")
  }
   if(args[0] === "botlog-kanal"){
     if(db.has(`bot-log_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!botlist-ayar sıfırla**")
     let botlog = message.mentions.channels.first();
     if(!botlog) return message.channel.send("Lütfen kanal seçiniz.")
     db.set(`bot-log_${message.guild.id}`, botlog.id)
     message.channel.send("Bot-log kanalı başarıyla ayarlandı")
  }
   if(args[0] === "başvurugiden-kanal"){
     if(db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Bu kanal zaten ayarlanmış.Sıfırlamak için **!botlist-ayar sıfırla**")
     let basvurukanal = message.mentions.channels.first();
     if(!basvurukanal) return message.channel.send("Lütfen kanal seçin.")
     db.set(`basvuruk_${message.guild.id}`, basvurukanal.id)
     message.channel.send("Başvuru kanalı başarıyla ayarlandı")}
  if(args[0] === "yetkili"){
    if(db.has(`byetkili_${message.guild.id}`)) return message.channel.send("Yetkili zaten ayarlanmış.")
    let yetkilirol = message.mentions.roles.first();
    if(!yetkilirol) return message.channel.send("Lütfen rol seçin.")
    db.set(`byetkili_${message.guild.id}`, yetkilirol.id)
    message.channel.send("Başarıyla ayarlandı.")
  }
   if(args[0] === "sıfırla"){
     if(!db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
     if(!db.has(`bot-log_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
     if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Kanallar önceden ayarlanmamış.")
     if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Rol önceden ayarlanmamış")
     db.delete(`basvuruk_${message.guild.id}`)
     db.delete(`bot-log_${message.guild.id}`)
     db.delete(`bot-ekle_${message.guild.id}`)
     db.delete(`byetkili_${message.guild.id}`)
     message.channel.send("Başarıyla sıfırlandı.")
     

   }


      
      } else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              .then(Strom => Strom.delete({ timeout: 10000 }));
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botlistayar','botlistayarla',"botlist-yardım","yardım-botlist","botlist-sistem"],
  permLevel: 0,
};

exports.help = {
  name: 'botlist-ayar', 
  description: "Bot List Ayarları",
  usage: 'botlistayarla'
};