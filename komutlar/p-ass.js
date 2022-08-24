const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjYwNzM0NTkyfQ.Tci7n9zVPbCAfU70t8CccDiH7lg7pGrvYHnIvRk9f1s', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('Bu kanalda **NSFW** Aktif değil !') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Veuillez patienter...`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'ass'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[L'image ne se charge pas ? cliquez ici](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter(client.footer)
            
            m.edit(embed_nsfw);
        });
    });
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
          .then(Strom => Strom.delete({ timeout: 10000 }));    
}
        })
      
      },
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ass'],
  permLevel: 0
};
exports.help = {
  name: 'ass',
  category: "morno",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'ass'
};