const Discord = require("discord.js");
const Database = require("../Helpers/Database");
const data = require('quick.db');
exports.run = async (client, message, args) => {
 
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjYwNzM0NTkyfQ.Tci7n9zVPbCAfU70t8CccDiH7lg7pGrvYHnIvRk9f1s', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  
  const db = new Database("./Servers/" + message.guild.id, "Invites");
    var data = db.get(`invites.${message.member.id}`) || { total: 0, fake: 0, inviter: null, regular: 0, bonus: 0, leave: 0 };//
    var embed = new Discord.MessageEmbed()
    .setDescription(`**Toplam:** \`${(data.total || 0) + (data.bonus || 0)}\`, **Düzenli** \`${data.regular || 0}\`, **Bonus:** \`${data.bonus || 0}\`, **Çıkanlar:** \`${data.leave || 0}\`, (**Sahte Olanlar:** \`${data.fake || 0}\`)`)//
    .setColor("RANDOM");
    message.channel.send(embed);
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              .then(Strom => Strom.delete({ timeout: 10000 }));
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davetlerim',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};
