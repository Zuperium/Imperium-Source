const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#4286f4")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Bot Version", "V1.0.B")
  .addField("About the bot", "Imperium is a general purpose bot featuring moderation, and administration commands!")
  .addField("Created On", bot.user.createdAt);

  message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
