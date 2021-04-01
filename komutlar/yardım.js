const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**Dersus Bot**`)
.setDescription(`**\`d!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**`)
.addField(`<a:HaraketliEmoji212:825383536604741662>__Moderasyon Komutları__`,`<a:sefa:808740489892986880> \`${prefix}moderasyon\` `,true)

.addField(`<a:HaraketliEmoji212:825383536604741662>__Kayıt Komutları__`,`<a:sefa:808740489892986880> \`${prefix}kayıt\` **BETA**`,true)

.addField(`<a:HaraketliEmoji212:825383536604741662>__Koruma Komutları__`,`<a:sefa:808740489892986880> \`${prefix}koruma\` `,true)

.addField(`<a:HaraketliEmoji212:825383536604741662>__Genel Komutlar__`,`<a:sefa:808740489892986880> \`${prefix}genel\` `,true)

.addField(`<a:HaraketliEmoji212:825383536604741662>__GIF Komutlar__`,`<a:sefa:808740489892986880> \`${prefix}gif\` `,true)

.addField(`<a:HaraketliEmoji212:825383536604741662>__Davet Komutlar__`,`<a:sefa:808740489892986880> \`${prefix}davet\` `,true)
.addField(`<a:HaraketliEmoji212:825383536604741662>__BotList Komutlar__`,`<a:sefa:808740489892986880> \`${prefix}botlist\` `,true)

.setImage("https://cdn.discordapp.com/attachments/825103737785548852/826352141484163072/standard_1.gif")
.setFooter(`Dersus Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Yardım Menüsü',
  usage: 'v!yardım'
};
