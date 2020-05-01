const TelegramBot = require('node-telegram-bot-api');

const token = '1093970624:AAGv5-k6E53uApfVZYPwalgcE73Z5E14Ud8';

const bot = new TelegramBot(token, {polling: true});

var IdMiChat =1189408516;
var SerialPort  = require ( 'serialport' );
var Mipuerto= new SerialPort ( '/dev/COM3', {
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
});

Mipuerto.setEncoding('utf8');

Mipuerto.on('data', function(data){
  console.log ("lo que entro es"+ data);
  if (data [0]=='H') {
    console.log("Boton Precionado");
    bot.sendMessage(IdMiChat, "se preciono el boton ");
  }
 });
