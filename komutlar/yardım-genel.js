const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**Dersus Bot**`)
.setDescription(`**\`ad!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:HaraketliEmoji212:825383536604741662> **\`Genel Komutlar\`**
<a:sefa:808740489892986880> **\`${prefix}kullanıcı-bilgi\`: Etiketlediğin/Kendi Profilin Hakkında Bilgi Verir.**
<a:sefa:808740489892986880> **\`${prefix}sunucu-bilgi\`: Sunucu Hakkında Bilgi Verir.**
<a:sefa:808740489892986880> **\`${prefix}yetkilerim\`: Sunucuda Olan Yetkilerinizi Gösterir.**
<a:sefa:808740489892986880> **\`${prefix}kurallar\`: Hazır Kurallar Metni Atar.**
<a:sefa:808740489892986880> **\`${prefix}sunucupp\`: Sunucunun PPsini Atar.**
<a:sefa:808740489892986880> **\`${prefix}avatar\`: Avatarınızı Atar.**
<a:sefa:808740489892986880> **\`${prefix}yapımcı-çağır\`: Botun Yapımcısına Belirtiğiniz Sebeple Mesaj Atar Yardım Dışında Kullanma.**
`)

.setImage("https://cdn.discordapp.com/attachments/825103737785548852/826352141484163072/standard_1.gif")
.setFooter(`Dersus Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["genel"], 
  permLevel: 0
};

exports.help = {
  name: "yardımgenel",
  description: 'Genel Yardım Menüsü',
  usage: 'v!genel'
};
