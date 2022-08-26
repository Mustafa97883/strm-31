exports.run = async (client, message, args) => {
    const { channel } = message.member.voice;
   // 
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Atlayabileceğim bir şarkı yok.**");
    }  // 
    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ **| Şarkı geçildi.**");
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s',"skip"],
  permLevel: 0
};
exports.help = {
  name: 'atla',
  category: "müzik",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'atla <@kullanıcı>'
};
