const Discord = require('discord.js');

exports.run = (client, message) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {

let sunucu = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setColor("BLACK")
.addField('Sunucu İd :', message.guild.id)
.addField('Sunucu Sahibi :', message.guild.owner, true)
.addField('Sunucu Bölgesi :', message.guild.region)
.addField('Afk Kanalı :', `${message.guild.afkChannel}`, true)
.setTitle("\n\nSunucu İstatistik")
.addField('Üye Sayısı :', message.guild.memberCount)
.addField('Kanal Sayısı :', message.guild.channels.size, true)
.addField('Rol Sayısı :', message.guild.roles.cache.size)
.addField('<a:hg:855392659136839680>  Çevrimiçi :', message.guild.members.cache.filter(m => m.user.presence.status === "online").size)
.addField('<a:alarm3:823900153831620658> Rahatsız Etmeyin :', message.guild.members.cache.filter(m => m.user.presence.status === 'dnd').size)
.addField('<a:teslim:823900157892493312>  Boşta :', message.guild.members.cache.filter(m => m.user.presence.status === 'idle').size)
.addField('<a:686304821346697301:855392669600317440>  Çevrimdışı :', message.guild.members.cache.filter(m => m.user.presence.status === 'offline').size)
return message.channel.send(sunucu) 

} else {
        message.channel.send(` Bu Komutu Sadece 12 Saatte Bir Oyvererek Kullanabilirsiniz Oyvermek İçin (https://top.gg/bot/756883309270663229/vote) linke Tıklayarak Oyverebilirsiniz. Oy Verdiyseniz 5 Dakka Bekleyiniz`) 
              
}
        })
      
      },
module.exports.conf = {
aliases: ["sunucu-bilgi","sb","s-b","say"],
permLevel: 0, 
enabled: true,
guildOnly: true
};

module.exports.help = {
    name: 'sunucubilgi',
    description: '',
    usage: 'sunucubilgi'
};