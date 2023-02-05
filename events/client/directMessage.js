const { Client } = require("discord.js-v11");

module.exports = (client, msg) => {
  if (msg.author.bot) return;
  msg.channel.send("Me MP ne sert à rien, je suis un bot.");
}