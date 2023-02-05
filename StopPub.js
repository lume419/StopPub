const { Client, Collection } = require('discord.js-v11');
const { TOKEN } = require('./config');
const { readdirSync } = require("fs");

const client = new Client();
client.commands = new Collection();

const loadEvents = (dir = "./events/") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evnt = require(`${dir}/${dirs}/${event}`);
      const eventName = event.split(".")[0];
      client.on(eventName, evnt.bind(null, client));
    }
  })
}

loadEvents();

client.login(TOKEN);