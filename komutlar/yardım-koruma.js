const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**Dersus Bot**`)
.setDescription(`**\`d!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:HaraketliEmoji212:825383536604741662> **\`Sunucu Koruma\`**
<a:sefa:808740489892986880>  **\`${prefix}anti-raid\`: Sunucuyu Patlamadan Korur.**
<a:sefa:808740489892986880>  **\`${prefix}kanal-koruma\`: Sunucu Kanallarını Korur.**
<a:sefa:808740489892986880>  **\`${prefix}rol-koruma\`: Sunucu Rollerini Korur.**
<a:sefa:808740489892986880>  **\`${prefix}bot-izni ver/kaldır\`: Botun Sunucuya Giriş İznini Ayarlar.**
`)


.setImage("https://cdn.discordapp.com/attachments/825103737785548852/826352141484163072/standard_1.gif")
.setFooter(`Dersus Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["koruma"], 
  permLevel: 0
};

exports.help = {
  name: "yardımkoruma",
  description: 'Koruma Yardım Menüsü',
  usage: 'v!koruma'
};
