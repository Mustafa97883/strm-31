const Discord = require('discord.js');
const database = require('quick.db');
var kelimeler = ['test1', 'test2',"elma",
  "armut",
  "mahmut",
  "eşya",
  "sunucu",
  "ismail",
  "eşek",
  "para",
  "internet",
  "eğlence",
  "sigara",
  "sevgi",
  "Strom",
  "dünya",
  "korona",
  "nitro",
  "kral",
  "misket",
  "limonata",
  "kurabiye",
  "discord",
  "portakal",
  "aşure",
  "yaşam",
  "zehir",
  "hamsi",
  "balık",
  "nektari",
  "şeftali",
  "kanalizasyon",
  "yadigar",
  "koyun",
  "halı",
  "kilim",
  "paspas",
  "kamera",
  "telefon",
  "çorap",
  "şarj",
  "slikon",
  "kumanda",
  "demir",
  "crypto",
  "kablo",
  "resim",
  "bira",
  "site",
  "zaman",
  "ses",
  "pervane",
  "klima",
  "mouse",
  "kapıKolu",
  "havalandırma",
  "imleç",
  "steam",
  "twitch",
  "arnavud",
  "ankara",
  "istanbul",
  "sazan",
  "olta",
  "kitap",
  "tuş",
  "lavabo",
  "hatıra",
  "inek",
  "tokmak",
  "tabut",
  "sinyal"];

exports.run = async (client, message, args) => {// can#0002

  if(!args[0]) return message.channel.send('Kiminle yazan kazanır oynamak istiyorsan o kişiyi etiketle.');
  if(!message.mentions.members.first()) return message.channel.send('Hata: Etiketlenen kişi bulunamadı.');
  const member = message.mentions.members.first();
  if(member.user.id === message.author.id) return message.channel.send('Hata: Sadece kendiniz dışında bir kişiyle oynayabilirsiniz.');

  message.channel.send(`${member}, sana bir yazan kazanır daveti yollandı. Kabul etmek istiyorsan aşşağıda ki 🟢 tepkisine, reddetmek için 🔴 tepkisine tıkla.`).then(async sent => {
    await sent.react('🟢');
    await sent.react('🔴');

    const filter = (reaction, user) => user.id === member.id;
    sent.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] }).then(collected => {
      collected = collected.first();
      if(collected._emoji.name === '🔴') return sent.delete() && message.reply('**ENAYİ** Korktu Kaçtı.');
      sent.delete();
      message.channel.send('Kelime hazırlanıyor, bekleyin!').then(sent2 => {
        setTimeout(() => {
          const kelime = random(kelimeler);
          const mf = response => {
	          return response.content.toLowerCase() === kelime.toLowerCase();
          };

          message.channel.send(`${member} ${message.author}, kelimeniz: ${kelime}`);
	        message.channel.awaitMessages(mf, { max: 1, time: 50000, errors: ['time'] }).then(answer => {
            sent2.delete();
          
            return message.channel.send(`${answer.first().author} doğru cevabı verdi!`).then(m => m.delete({ timeout: 20000 }))
          }).catch(() => message.channel.send('Sanırım kimse kazanamadı.'));

        }, 3000);
      });
    }).catch(error => console.log(error) && message.reply('Bir cevap verilmedi.'));
  });

  function random(map) {
    if(!map) return;
    return map[Math.floor(Math.random() * map.length)];
  };

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazankazanır'],
  permLevel: 0
};
 
exports.help = {
  name: 'yazan-kazanır'
};// codare ♥