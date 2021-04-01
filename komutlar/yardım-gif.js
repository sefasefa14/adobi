const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**Dersus Bot**`)
.setDescription(`**\`d!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:HaraketliEmoji212:825383536604741662> **\`GIF Komutları\`**
<a:sefa:808740489892986880> **\`${prefix}couple\`: Sevgili Gif i Atar.**
<a:sefa:808740489892986880> **\`${prefix}woman\`: Kadın Gif i Atar.**
<a:sefa:808740489892986880> **\`${prefix}man\`: Adam Gif i Atar.**
<a:sefa:808740489892986880> **\`${prefix}baby\`: Bebek Gif i Atar.**
<a:sefa:808740489892986880> **\`${prefix}leedongwook\`: (İstek Üzerine Eklendi) Lee Dong Wook Gif i Atar.**
`)

.setImage("https://cdn.discordapp.com/attachments/825103737785548852/826352141484163072/standard_1.gif")
.setFooter(`Dersus Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["gif"], 
  permLevel: 0
};

exports.help = {
  name: "yardımgif",
  description: 'GIF Yardım Menüsü',
  usage: 'v!gif'
};
