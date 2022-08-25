const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, chimp) => {// can ♡ b#1010
if(message.author.id !== '846736343593779230') return;

if(!chimp[0]) return message.reply("Bir kullanıcı id'si girmelisin.");

const user = await client.users.fetch(chimp[0]).catch(err => {
return message.reply('Bu idye sahip bir kullanıcı bulamadım.')});

if(user) {

  if(database.fetch(user.id)) {
  database.delete(user.id);
  return message.channel.send(`\`${user.tag}\` isimli kullanıcı zaten karalistedeydi, karalisteden çıkarıldı.\nArtık botun komutlarını kullanabilecek.`);
  }
  database.set(user.id, true);
  return message.channel.send(`\`${user.tag}\` isimli kullanıcı başarıyla karalisteye alındı.`);
};

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'karaliste'
};// codare ♥
