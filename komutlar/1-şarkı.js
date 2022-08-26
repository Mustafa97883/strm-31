exports.run = async (client, message, args) => {
    
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 // 
    if (!serverQueue) {
      return message.channel.send("**Herhangi bir şarkı oynatmıyorum.**");
    }
    message.channel.send(serverQueue.songs[0].title + ' - **Şuanda Oynatılan Şarkı.**')

    
    
    
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sözler'],
  permLevel: 0
};
exports.help = {
  name: 'şarkı',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'duello <@kullanıcı>'
};
