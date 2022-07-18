const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  if(!database.fetch('güncellemeler') || database.fetch('güncellemeler').length <= 0) return message.reply('Hiç güncelleme notu eklenmemiş.');
  
  let pages = [];
  let page = 1;
  database.fetch('güncellemeler').sort((a, b) => b.number-a.number).forEach(data => {
    pages.push(new Discord.MessageEmbed()
    .setColor('GOLD')
    .setAuthor('Güncelleme #'+data.number)
    .setDescription(data.title)
    .addField('Açıklama', '・ '+data.description.split('\n').join('\n・ ')));
  });

  message.channel.send(pages[0]).then(m => {
    m.react('⬅').then(() => m.react('➡'));
    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
    const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

    const backwards = m.createReactionCollector(backwardsFilter, { time: 0 });
    const forwards = m.createReactionCollector(forwardsFilter, { time: 0 });

    forwards.on('collect', (reaction, user) => {
      if(page === pages.length) {
        page = 0;
      };
      page++;
      reaction.users.remove(user.id);
      m.edit(pages[page-1]);
    })
    backwards.on('collect', (reaction, user) => {
      console.log(page);
      if(page <= 1) {
        page = pages.length+1;
      };
      reaction.users.remove(user.id);
      page--;
      m.edit(pages[page-1]);
    })
  });

} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
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
  name: 'güncellemeler'
};
