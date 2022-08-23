let database = require("quick.db");

exports.run = async (client, message) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjYwNzM0NTkyfQ.Tci7n9zVPbCAfU70t8CccDiH7lg7pGrvYHnIvRk9f1s', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `❌ Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  let log = message.mentions.channels.first();
  if (!log)
    return message.channel.send(
      `> ❌ **Bir Kanal Etiketlemen Gerekmekte \n > Örnek __${process.env.prefix}abonelog #kanal__**`
    );

  database.set(`abonelog.${message.guild.id}`, log.id);
  message.channel.send(
    `✅ **Abone kanalı başarıyla "${log}" olarak ayarlandı.**`
  );
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
             .then(Strom => Strom.delete({ timeout: 10000 })); 
}
        })
      
      },

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-log"],
  perm: 0
};
exports.help = {
  name: "abonelog"
};

exports.play = {
  kullanım: "abonelog #kanal",
  açıklama: "Abone Logunu Ayarlarsınız",
  kategori: "Abone"
};
