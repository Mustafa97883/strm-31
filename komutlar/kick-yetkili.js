const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let CERol = message.mentions.roles.first();
  let CEYetkili =
    db.fetch("ce-kickyetkili." + message.guild.id) || "Var olmayan";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("KICK_MEMBERS")
  )
    return message.channel.send(
      `> <@${message.author.id}> kick Yetkin Olmadan kick Sistemdeki Hiç Birşeyi Ayarlamassın.`
    );
  if (!CERol) return message.channel.send( new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `> <‼️ Daha kick Yetkili Rölünü Ayarlamadın \n ‼️ Doğru Ayarlamak İçin \`${prefix}kick-yetkili @Rol\``
        ));
  await db.set("ce-kickyetkili." + message.guild.id, CERol.id);
  return message.channel.send(
    "Daha önceden " +
      CEYetkili +
      " olarak belirlenen rolü <@&" +
      CERol.id +
      "> rolü ile değiştirdim!"
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kick-yetkili",
  description: "",
  usage: ""
};
