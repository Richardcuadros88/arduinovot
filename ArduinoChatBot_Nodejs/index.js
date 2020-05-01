const TelegramBot = require('node-telegram-bot-api');

const token = '1093970624:AAGv5-k6E53uApfVZYPwalgcE73Z5E14Ud8';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
 const chatId = msg.chat.id;
 var Mensaje = msg.text;
 if (mesaje == "encender" {
   console.log ("apagar el led");
 }
 bot.sendMessage(chatId, 'Recivi tu mensaje');
});
