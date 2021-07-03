const Strom = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(Strom => message.member.roles.cache.has(Strom)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Tag rolü vermek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

const MessageEmbed = new Strom.MessageEmbed()
.setColor("RANDOM")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp

if(etiketlenenKişi.roles.cache.has(ayarlar.TagRol)) return message.channel.send(MessageEmbed.setDescription(`Kullanıcıdan başarıyla taglı <@&${ayarlar.TagRol}> rolü alındı!`)).then(etiketlenenKişi.roles.remove(ayarlar.TagRol))

etiketlenenKişi.roles.add(ayarlar.TagRol)

message.react(client.emojis.cache.get(ayarlar.yes))

message.channel.send(MessageEmbed.setDescription(`Kullanıcıya başarıyla taglı <@&${ayarlar.TagRol}> rolü verildi!`))

}
exports.config = {
    name: "b-tagges",
    guildOnly: true,
    aliases: ["b-tagrol", "b-taglırol", "b-taglirol"]
}