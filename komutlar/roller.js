const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1Njg4MzMwOTI3MDY2MzIyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU2MTEwOTkxfQ.7Oqg1lelprL5ACm4Yh0RKREKaOTPIyQRrSjDaT7uKko', client)
dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
  const prefix = 's!';// sizin prefixiniz
  if(message.guild.roles.cache.size <= 0) return;
  if(args[0] && args[0] === 'sırala') {
    return message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.guild.name+' Sunucusunun rolleri', message.guild.iconURL({ dynamic: true, size: 2048 }))
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setURL('https://discord.gg/CfaFQkJ2ke')
    .setDescription(`**Roller [${message.guild.roles.cache.size}]**
    
${message.guild.roles.cache.filter(x => x.name !== '@everyone').sort((a, b) => b.position-a.position).sort((a, b) => b.members.size-a.members.size).map(role => `${role} (**${role.members.size}**)`).join('\n')}`)
    .setFooter('Sorgulayan: '+message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor('GREEN'));
  };
  if(!args[0] || !client.guilds.cache.some(x => x.name.toLowerCase() === args.join(' ').toLowerCase())) {

    return message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.guild.name+' Sunucusunun rolleri', message.guild.iconURL({ dynamic: true, size: 2048 }))
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setURL('https://discord.gg/CfaFQkJ2ke')
    .setDescription(`**Roller [${message.guild.roles.cache.size}]**
    
${message.guild.roles.cache.filter(x => x.name !== '@everyone').sort((a, b) => b.position-a.position).map(role => `${role} (**${role.members.size}**)`).join('\n')}`)
    .setFooter(`Sorgulayan: ${message.author.tag} | Üye sayısını sıralamak için ${prefix}roller sırala`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor('GREEN'));

  } else {

    message.guild = client.guilds.cache.find(x => x.name.toLowerCase() === args.join(' ').toLowerCase());
    return message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.guild.name+' Sunucusunun rolleri', message.guild.iconURL({ dynamic: true, size: 2048 }))
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setURL('https://discord.gg/CfaFQkJ2ke')
    .setDescription(`**Roller [${message.guild.roles.cache.size}]**
    
${message.guild.roles.cache.filter(x => x.name !== '@everyone').sort((a, b) => b.position-a.position).map(role => `${role} (**${role.members.size}**)`).join('\n')}`)
    .setFooter(`Sorgulayan: ${message.author.tag} | Üye sayısını sıralamak için ${prefix}roller sırala`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor('GREEN'));

  };
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
  name: 'roller'
};