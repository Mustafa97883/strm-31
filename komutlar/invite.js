const Discord = require("discord.js");
const config = require("../config.json");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {   
  let user = message.mentions.users.first() || message.author;
    let inv =  db.fetch(`inv.${user.id}.total`) || 0;  
    message.channel.send(new Discord.MessageEmbed().addField("Toplam Davetin:",inv)) 
} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davetlerim"],
  permLevel: 0
};

exports.help = { 
  name: 'invite', 
  description: "Şapka Verir.",
  usage: "invite"
}
