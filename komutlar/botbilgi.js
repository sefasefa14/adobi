const Discord = require("discord.js");

exports.run = (client, message) => {
  let levi = new Discord.MessageEmbed()

    .setAuthor("Dersus Bot İstatistik")
    .addField(
      "<a:sefaung:825383310410383391> Veriler",
      `> Toplam Sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam Kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> Toplam Kanal: **${
        client.channels.cache.size
      }** \n> Toplam Komut: **${client.commands.size}**`
    )
    .addField(
      "<a:sefatacg:825383537590140948> Geliştiricilerim",
      `> <@701790878573920336> \n> <@807904406560964608>`
    )
    .addField(
      "<a:EnesAcar51:825383896366972928> Sürümler",
      `> Discord.js Sürümü: **v${Discord.version}** \n> Node.js Sürümü: **${process.version}**`
    )
    .addField(
      "<a:sefa:808740489892986880> Gecikmeler",
      `> Bot Pingi: **${
        client.ws.ping
      }** \n> Mesaj Gecikmesi: **${new Date().getTime() -
        message.createdTimestamp}**`
    )

    .addField(
      "<a:HaraketliEmoji185:825383530162815036> Davet Linklerim",
      "> [Beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=822075617092304926&permissions=8&scope=bot) \n > [Destek Sunucum](https://discord.gg/BpCGmuFTR8)"
    )
    .setFooter(`Dersus Bot ©2021 Tüm Hakları Saklıdır`)

    .setTimestamp()
    .setColor("GOLD");
  message.channel.send(levi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i", "botbilgi"]
};

exports.help = {
  name: "istatistik",
  description: "Botun Bilgilerini Gösterir",
  usage: "v!botbilgi"
};
