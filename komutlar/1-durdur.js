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

    if (!serverQueue) {
      return message.channel.send("**Duraklatabileceğim bir şarkı bulamadım.**");
    }
    if(!serverQueue.playing) return message.channel.send('**Şarkılar Zaten Duraklatılmış.**')
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      return message.channel.send("✅ **| Oynatılan şarkı duraklatıldı.**")
  }  
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pause',"dur"],
  permLevel: 0
};
exports.help = {
  name: 'durdur',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'duello <@kullanıcı>'
};
