const TelegramBot = require('node-telegram-bot-api');

const token = '1093970624:AAGv5-k6E53uApfVZYPwalgcE73Z5E14Ud8';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
