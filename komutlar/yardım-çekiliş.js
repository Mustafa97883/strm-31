const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
 .setAuthor(`${client.user.username} Strom | çekiliş menüsü`)
 .setColor("RED")
.addFields({
                name: '**s!çekiliş**',
                  value: "Çekiliş başlatır",
                inline: true
              
              
     

              }) 
  .setFooter(`*                                                               ${client.user.username} | © 2022                                                                      *`)
 .setImage()
 
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-sistemi'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'çekilişsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};