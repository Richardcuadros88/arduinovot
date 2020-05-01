const TelegramBot = require('node-telegram-bot-api');

const token = '1093970624:AAGv5-k6E53uApfVZYPwalgcE73Z5E14Ud8';

const bot = new TelegramBot(token, {polling: true});

var SerialPort  = require ( 'serialport' );
var Mipuerto= new SerialPort ( ' / dev / COM3 ' , {
  baudRate: 9600,
  autoOpen: true
} ) ;


bot.on('message', (msg) => {
 const chatId = msg.chat.id;
 console.log("El ID del char"+ chatId);
 var Mensaje = msg.text;
 if (Mensaje == "Encender") {
   console.log ("Encendiendo el led");
    bot.sendMessage(chatId, 'Encendere el led');
    Mipuerto.write(H);
 } else if (Mensaje == "Apagar"){
   console.log ("Apagar el led");
    bot.sendMessage(chatId, 'Apagare el led');
    Mipuerto.write(L);

 }

bot.sendMessage ( chatId , 'Recibí su mensaje ' )  ;
});
