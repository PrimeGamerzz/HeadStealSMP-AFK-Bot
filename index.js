const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'your.server.ip', // change this
  port: 25565,             // change if your server has a different port
  username: 'AFK_Bot',     // any name, doesn't need to be a real account
  version: false,          // auto-detect version
});

bot.on('spawn', () => {
  console.log('Bot has spawned and is ready!');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 5000);
});
