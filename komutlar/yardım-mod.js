const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**Dersus Bot**`)
.setDescription(`**\`d!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:HaraketliEmoji212:825383536604741662> **\`Moderasyon Komutları\`**
<a:sefa:808740489892986880> **\`${prefix}modlog\`: Log Kanalını Ayarlarsınız.**
<a:sefa:808740489892986880> **\`${prefix}ban <user>\`: Kişiyi Sunucudan Banlar.**
<a:sefa:808740489892986880> **\`${prefix}unban <user>\`: Kişinin Banını Kaldırır.**
<a:sefa:808740489892986880> **\`${prefix}nuke\`: Kanala Nuke Atar.** 
<a:sefa:808740489892986880> **\`${prefix}sohbet-aç/kapat\`: Sohbeti Açar/Kapatır.**
<a:sefa:808740489892986880> **\`${prefix}reklam aç/kapat\`: Reklam Engellemeyi Açar/Kapatır.**
<a:sefa:808740489892986880> **\`${prefix}küfür aç/kapat\`: Küfür Engellemeyi Açar/Kapatır.**
<a:sefa:808740489892986880> **\`${prefix}temizle/sil <0-100>\`: Belirtilen Miktarda Mesajı Siler.**
<a:sefa:808740489892986880> **\`${prefix}say\`: Üye Durum Grafiğini Gösterir.**

<a:HaraketliEmoji212:825383536604741662> **\`Oto Rol Komutları(NEW)\`**
<a:sefa:808740489892986880> **\`${prefix}otorol-ayarla\`: Sunucuya Giren Birisi İçin Ayarlanan Otomatik Rol Verir.**
<a:sefa:808740489892986880> **\`${prefix}otorol-sıfırla\`: Ayarlanan Otomatik Rol Sıfırlanır.**
<a:sefa:808740489892986880> **\`${prefix}otorol-mesaj-ayarla\`: Otomatik Rol Verdikten Sonra Ayarlanan Kanala Nasıl Mesaj Gönderdiğini Ayarlarsın.**
<a:sefa:808740489892986880> **\`${prefix}otorol-mesaj-sıfırla\`: Ayarlanan Otomatik Rol Mesajını Sıfırlar.**

<a:HaraketliEmoji212:825383536604741662> **\`Jail Sistemi Komutları\`**
<a:sefa:808740489892986880> **YAKINDA**

<a:HaraketliEmoji212:825383536604741662> **\`Mute Sistemi Komutları\`**
<a:sefa:808740489892986880> **YAKINDA**
`)








.setImage("https://cdn.discordapp.com/attachments/825103737785548852/826352141484163072/standard_1.gif")
.setFooter(`Dersus Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["moderasyon", "mod"], 
  permLevel: 0
};

exports.help = {
  name: "yardımmoderasyon",
  description: 'Moderasyon Yardım Menüsü',
  usage: 'v!moderasyon'
};
