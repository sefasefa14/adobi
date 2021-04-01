const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**Dersus Bot**`)
.setDescription(`**\`d!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:HaraketliEmoji212:825383536604741662> **\`Erkek Rol Komutları\`**
<a:sefa:808740489892986880> **\`${prefix}erkek-rol @rol\`: Erkek Rolünü Ayarlar.**
<a:sefa:808740489892986880> **\`${prefix}erkek-rol sıfırla\`: Erkek Rolünü Sıfırlar.**
<a:sefa:808740489892986880> **\`${prefix}erkek @kullanıcı isim yaş\`: Erkek Olarak Kayıt Edersiniz.**

<a:HaraketliEmoji212:825383536604741662> **\`Kız Rol Komutları\`**
<a:sefa:808740489892986880> **\`${prefix}kız-rol @rol\`: Kız Rolünü Ayarlar.**
<a:sefa:808740489892986880> **\`${prefix}kız-rol sıfırla\`: Kız Rolünü Sıfırlar.**
<a:sefa:808740489892986880> **\`${prefix}kız @kullanıcı isim yaş\`: Kız Olarak Kayıt Edersiniz.**

<a:HaraketliEmoji212:825383536604741662> **\`Alınacak Rol Komutları\`**
<a:sefa:808740489892986880> **\`${prefix}alınacak-rol @rol\`: Kayıt Olunca Alınacak Rolü Ayarlar.**
<a:sefa:808740489892986880> **\`${prefix}alınacak-rol sıfırla\`: Kayıt Olunca Alınacak Rolü Sıfırlar.**

<a:HaraketliEmoji212:825383536604741662> **\`Kayıtçı Rol Komutları\`**
<a:sefa:808740489892986880> **\`${prefix}kayıtçı-rol @rol\`: Kayıtçı Rolünü Ayarlar.**
<a:sefa:808740489892986880> **\`${prefix}kayıtçı-rol sıfırla\`: Kayıtçı Rolünü Sıfırlar.**
<a:sefa:808740489892986880> **\`${prefix}kayıtçı-ver @kullanıcı\`: Belirttiğiniz Kullanıya Kayıtçı Rolü Verir.**
<a:sefa:808740489892986880> **\`${prefix}kayıtçı-al @kullanıcı\`: Belirttiğiniz Kullanıcıdan Kayıtçı Rolünü Alır.**

<a:HaraketliEmoji212:825383536604741662> **\`Kayıt Kanal Komutları\`**
<a:sefa:808740489892986880> **\`${prefix}kayıt-kanal #kanal\`: Kayıt Kanalını Ayarlar.**
<a:sefa:808740489892986880> **\`${prefix}kayıt-kanal sıfırla\`: Kayıt Kanalını Sıfırlar.**

`)


.setImage("https://cdn.discordapp.com/attachments/825103737785548852/826352141484163072/standard_1.gif")
.setFooter(`Dersus Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["kayıt"], 
  permLevel: 0
};

exports.help = {
  name: "yardımkayıt",
  description: 'Kayıt Yardım Menüsü',
  usage: 'v!kayıt'
};

  

    
