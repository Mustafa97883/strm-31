const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let CEKişi = message.mentions.users.first();
  let CESebep = args.slice(1).join(" ") || "Belirtilmemiş";
  let CELog = db.fetch("ce-kicklog." + message.guild.id);
  let CEYetkili = db.fetch("ce-kickyetkili." + message.guild.id);

  if (!CEYetkili) return message.channel.send("Sistem ayarlanmamış!");
  if (!CELog) return message.channel.send("Sistem ayarlanmamış!");

  if (!message.member.roles.cache.has(CEYetkili))
    return message.channel.send(`> <@${message.author.id}> kick Yetkin Olmadan kick Sistemdeki Hiç Birşeyi Ayarlamassın.`);
  if (!CEKişi)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(`🔮 kicklenecek Kişiyi Etiketle \n > 🔮 Doğru Kullanım \`${prefix}kick @Kişi <Sebep>\``)
    );
  if (
    !message.guild.members.cache
      .get(client.user.id)
      .hasPermission("KICK_MEMBERS")
  )
    return message.channel.send(" kick yetkim yok. ^^");
  await message.guild.members.kick(CEKişi.id, { reason: CESebep });
  await message.guild.channels.cache
    .get(CELog)
    .send(
      "<@" +
        CEKişi.id +
        "> kişisi <@" +
        message.author.id +
        "> kişisi tarafından ``" +
        CESebep +
        "`` sebebi ile kicklendı!"
    );
  return message.channel.send(
    "<@" +
      CEKişi.id +
      "> kişisi <@" +
      message.author.id +
      "> kişisi tarafından ``" +
      CESebep +
      "`` sebebi ile kicklendı!"
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kick",
  description: "",
  usage: ""
};
