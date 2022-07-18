const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let user = message.author
  let sebep = args.join(" ") 
  let member = message.mentions.members.first() 
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setDescription(`
 \`AFK\` moduna girmek için bir sebep yazmalısın.`).setColor("RED"))
  db.set(`afk_${user.id}`, sebep)
message.channel.send(new Discord.MessageEmbed().setDescription(`
 Başarıyla **${sebep}** sebebiyle \`AFK\` moduna geçildi.`).setColor("GREEN")) 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}
