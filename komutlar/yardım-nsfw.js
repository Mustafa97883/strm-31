const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle(`🔞`).setDescription(`
**
s!anal
s!4k
s!ass
s!pgif
s!hentai
s!anime
s!pussy
s!thigh
**`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'nsfw'
};