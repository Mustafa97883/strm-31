const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(msg.author.id).then(voted => {
      if(voted) { 
  let devtr=[
      "Aşkölçer %1 Gösteriyor.",
      "Aşkölçer %2 Gösteriyor.",
      "Aşkölçer %3 Gösteriyor.",
      "Aşkölçer %4 Gösteriyor.",
      "Aşkölçer %5 Gösteriyor.",
      "Aşkölçer %6 Gösteriyor.",
      "Aşkölçer %7 Gösteriyor.",
      "Aşkölçer %8 Gösteriyor.",
      "Aşkölçer %9 Gösteriyor.",
      "Aşkölçer %10 Gösteriyor.",
      "Aşkölçer %11 Gösteriyor.",
      "Aşkölçer %12 Gösteriyor.",
      "Aşkölçer %14 Gösteriyor.",
      "Aşkölçer %15 Gösteriyor.",
      "Aşkölçer %16 Gösteriyor.",
      "Aşkölçer %18 Gösteriyor.",
      "Aşkölçer %19 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %29 Gösteriyor.",
      "Aşkölçer %31 Gösteriyor.",
      "Aşkölçer %32 Gösteriyor.",
      "Aşkölçer %34 Gösteriyor.",
      "Aşkölçer %35 Gösteriyor.",
      "Aşkölçer %36 Gösteriyor.",
      "Aşkölçer %37 Gösteriyor.",
      "Aşkölçer %38 Gösteriyor.",
      "Aşkölçer %39 Gösteriyor.",
      "Aşkölçer %40 Gösteriyor.",
      "Aşkölçer %41 Gösteriyor.",
      "Aşkölçer %42 Gösteriyor.",
      "Aşkölçer %43 Gösteriyor.",
      "Aşkölçer %55 Gösteriyor.",
      "Aşkölçer %57 Gösteriyor.",
      "Aşkölçer %59 Gösteriyor.",
      "Aşkölçer %60 Gösteriyor.",
      "Aşkölçer %62 Gösteriyor.",
      "Aşkölçer %63 Gösteriyor.",
      "Aşkölçer %64 Gösteriyor.",
      "Aşkölçer %65 Gösteriyor.",
      "Aşkölçer %66 Gösteriyor.",
      "Aşkölçer %69 Gösteriyor.",
      "Aşkölçer %70 Gösteriyor.",
      "Aşkölçer %74 Gösteriyor.",
      "Aşkölçer %75 Gösteriyor.",
      "Aşkölçer %76 Gösteriyor.",
      "Aşkölçer %77 Gösteriyor.",
      "Aşkölçer %79 Gösteriyor.",
      "Aşkölçer %80 Gösteriyor.",
      "Aşkölçer %81 Gösteriyor.",
      "Aşkölçer %82 Gösteriyor.",
      "Aşkölçer %83 Gösteriyor.",
      "Aşkölçer %0 Gösteriyor.",
      "Aşkölçer %95 Gösteriyor.",
      "Aşkölçer %99 Gösteriyor.",
      "Aşkölçer %100 Gösteriyor.",
    ]

let xfalcon = msg.mentions.members.first()
     if(!xfalcon)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('Kimi Sevdiğini Etiketle?')
  }});

    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${xfalcon} ${devtr[Math.floor(Math.random() * 30)]}.`)
    }})
    }

  } else {
        msg.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
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
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }
