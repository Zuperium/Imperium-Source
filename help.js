const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let hicon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setDescription("Imperium Help!")
  .setColor("#1178ff")
  .setThumbnail(hicon)
  .addField("Bot Name", bot.user.username)
  .addField("Help Commands", "!8ball, !addrole, !ban, !botinfo, !clear, !say, !help, !kick, !removerole, !report, !say, !serverinfo, !tempmute")
  .addField("Extras", "Some commands like !ban needs to have reason, to make it work!");

  message.channel.send(helpembed);
}

module.exports.help = {
  name:"help"
}
