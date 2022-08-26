const Discord = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { YOUTUBE_API_KEY } = require("../ayarlar.json");
exports.run = async (client, message, args) => {
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('**Oynatılan bir şarkı Bulunmuyor.**')
    if(serverQueue.playing) return message.channel.send(`Duran bir şarkı yok.`)
     // 
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("✅ **| Duraklatılan şarkı sürdürüldü.**") 
 } 
    
    message.channel.send("**Duraklatılan bir şarkı yok.**")
    
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['devam',"resume","r"],
  permLevel: 0
};
exports.help = {
  name: 'devam',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'duello <@kullanıcı>'
};
