const Discord = require("discord.js");
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });

const config = require("./config.json");
const command = require("./command");

client.on("ready", () => {
  console.log(`Client is ready! @${client.user.username}`);

  command(client, "ping", (message) => {
    message.channel.send("Pong");
  });
});

client.login(config.token);
