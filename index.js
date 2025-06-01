const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'HeadStealSMP-Hs2v.aternos.me', // ⬅️ Replace this with your server IP
  port: 52902,             // ⬅️ Change this if your server uses a different port
  username: 'Staff',     // ⬅️ Any name you want for the bot
  version: false           // ⬅️ Auto-detects server version
});

const PASSWORD = 'StaffPlayzzXYZ'; // ⬅️ Set your desired password

bot.on('spawn', () => {
  console.log('✅ Bot spawned and is ready.');

  // Simple AFK jump loop every 5 seconds
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 5000);
});

// Automatically handle /register and /login prompts
bot.on('message', (message) => {
  const msg = message.toString().toLowerCase();
  console.log('💬 Server:', msg);

  if (msg.includes('/register')) {
    bot.chat(`/register ${PASSWORD}`);
  } else if (msg.includes('/login')) {
    bot.chat(`/login ${PASSWORD}`);
  }
});
