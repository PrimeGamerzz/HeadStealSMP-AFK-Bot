const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'HeadStealSMP-Hs2v.aternos.me', // change this
  port: 52902,             // change if your server has a different port
  username: 'Staff',     // any name, doesn't need to be a real account
  version: false,          // auto-detect version
});

bot.on('spawn', () => {
  console.log('Bot has spawned and is ready!');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 5000);
});
