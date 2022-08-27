const Strom = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
let botid = "756883309270663229";

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";

    const embed = new Strom.MessageEmbed()
    .setAuthor(
      `${client.user.username} `,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setColor("RANDOM")
    .setTitle(` **Altyapı al** `)
    .setDescription(`[Altyapı](https://discord.gg/fr43SS2n64)
    Altyapı satınalabilmek için **Altyapı** yazısına tıkla.
    altyapıları **owo** karşılığı alabilirsin.
  
      ${message.author.username} Tarafından İstendi.`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  
return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "altyapı",
  description: "oy",
  usage: "Oyver"
};
