const { prefix } = require("./config.json");

module.exports = (client, aliases, callback) => {
  if (typeof aliases === "string") {
    aliases = [aliases];
  }

  client.on("message", (message) => {
    const { content } = message;
    const { author } = message;

    aliases.forEach((alias) => {
      const command = `${prefix}${alias}`;

      if (content.startsWith(`${command} `) || content === command) {
        console.log(`Command ${command} is being executed by ${author.tag}`);
        callback(message);
      }
    });
  });
};
