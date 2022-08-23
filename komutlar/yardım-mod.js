const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let cse = new Discord.MessageEmbed()//discord.gg/turkiye
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`

• **s!ban** \`Belirttiğiniz Üyeyi Sunucudan Yasaklar.\`\n
• **s!nuke**  \`Kanaldaki bütün mesajları siler.\` \n
• **s!otorol**  \`Etiketlediğiniz rolü her gelen üyeye verir.\` \n
• **s!ototag**  \`Etiketlediğiniz tagı her gelen üyeye verir.\` \n
• **s!yetkilerim**  \`Sunucudaki yetkilerinizi gösterir.\` \n
• **s!sunucutanıt**\`Sunucunuzu bizim sunucuda tanıtır.\`\n
• **s!sayaç-ayarla**\`Sunucunuza sayaç ayarlarsınız. \`\n
• **s!kurallar**\`Sunucu için kurallar atar.\` \n
• **s!servericon**\`sunucu iconunu gösterir.\` \n
• **s!rank**\`Seviyenizi gösterir.\` \n
• **s!sohbet-aç**\`sohbet i yazılabilir hale getirir.\` \n
• **s!sohbet-kapat**\`sohbet i yazılamaz hale getirir.\` \n
• **s!kick-limit**\`kick limiti ayarlarsınız.\` \n
• **s!ban-limit**\`ban limiti ayarlarsınız.\` \n
• **s!oylama**\`oylama.\` \n
• **s!çoklu-oylama**\`çoklu oylama.\` \n
• **s!komutlar**\`bottaki bütün komutları gösterir.\` \n
• **s!toplamkomut**\`bottaki toplam kaç komut var onu gösterir.\` \n
• **s!hesapla**\`sizin yerinize matematik işlemi yapar.\` \n
• **s!gkanal**\`gelen-giden kanalı ayarlarsınız.\` \n







`)
.setFooter("Strom / Discord'da Yeni Devrim \nherhangi bir hatada s!hata (hata)\nönerileriniz için s!öneri (öneriniz)")
.setTimestamp()
message.channel.send(cse)
}
module.exports.conf = {
aliases: ["mod","moderasyon","moderasyon-sistemi"]
}

module.exports.help = {
name: "yardım-moderasyon",
usage: "!yardım"

};