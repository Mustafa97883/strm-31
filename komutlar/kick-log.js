const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let CEChannel = message.mentions.channels.first();
  let CELog = db.fetch("ce-kicklog." + message.guild.id) || "Var olmayan";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("KICK_MEMBERS")
  )
    return message.channel.send(
      `> <@${message.author.id}> kick Yetkin Olmadan kick Sistemdeki Hiç Birşeyi Ayarlamassın.`
    );
  if (!CEChannel)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `❗️ ❕ Daha kicklog Ayarlamadın \n > ✅ Doğru Ayarlamak İçin \`${prefix}kick-log #kanal\``
        )
    );
  await db.set("ce-kicklog." + message.guild.id, CEChannel.id);
  return message.channel.send(
    "Daha önceden " +
      CELog +
      " olarak belirlenen log kanalını <#" +
      CEChannel.id +
      "> kanalı ile değiştirdim!"
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kick-log",
  description: "",
  usage: ""
};
