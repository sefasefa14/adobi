const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const dersus = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Dersus Bot  **")
.setDescription(`

**• Komutlar**
> d!botlistayar →  Bot List Ayarları!
> d!bot-ekle →  Bot Gönderirsiniz!
> d!onayla →  Botu Onaylarsınız!
> d!reddet → Botu Reddetersiniz!
`)
 
 

return message.channel.send(dersus)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'botlist', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-botlist'
};