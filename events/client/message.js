const { Collection } = require('discord.js-v11');

module.exports = (client, msg) => {
  if (msg.channel.type === "dm") return client.emit("directMessage", msg);
  else return client.emit("banPubber", msg);
}