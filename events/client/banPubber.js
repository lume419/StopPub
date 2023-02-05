const { Client } = require("discord.js-v11");
const { LISTLINKS } = require('../../config');

module.exports = (client, msg) => {
  if(LISTLINKS.includes(msg.content) && !msg.member.hasPermission('MANAGE_CHANNELS')){
    msg.member.ban({days: 7, reason: 'Pub Sauvage'});
    msg.channel.send("<@" + msg.author + "> a été banni pour pub illégale.");
  }
}