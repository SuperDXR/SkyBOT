const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDUyOTY3MjY0MzYzNDc5MDQw.DfYDIg.1WEiMw0myHz56CTw4II1OuQqUJk');

bot.on('message', message => {
    if (message.content.startsWith('&superlindo')){
        message.channel.send('Ai Que Delicia/n Viado');
    }

});
bot.on('message', message => {
  let responseObject = {
    "/ip" : "*Minecraft Server IP:* **SkyPlay.landhosting.net**",
    "/pro" : "**Requisitos:**\n- Possuir 200 inscritos\n - Vídeo mostrando o servidor com voz\n - Pegar 20 likes no vídeo\n- Deixar o IP e a LOJA do servidor na descrição\n\n Grave vídeos semanais no servidor, caso contrário, iremos retirar sua tag.\nAssim que gravar, peça sua tag na DM do Twitter @RedeSkyPlay.",
    "/youtuber+" : "**Requisitos:**\n- Possuir 5.000 inscritos\n - Vídeo mostrando o servidor com voz\n - Pegar 150 likes no vídeo\n- Deixar o IP e a LOJA do servidor na descrição\n\n Grave vídeos semanais no servidor, caso contrário, iremos retirar sua tag.\n Assim que gravar, peça sua tag na DM do Twitter @RedeSkyPlay.",
    "/youtuber" : "**Requisitos:**\n- Possuir 700 inscritos\n - Vídeo mostrando o servidor com voz\n - Pegar 35 likes no vídeo\n- Deixar o IP e a LOJA do servidor na descrição\n\nGrave vídeos semanais no servidor, caso contrário, iremos retirar sua tag.\n Assim que gravar, peça sua tag na DM do Twitter @RedeSkyPlay.",
    "/aplicar" : "Olá! Player quer fazer o formulário de TRIAL? Entre no link: http://bit.ly/2j9au0l E Boa sorte!",
    "/modgc" : "Olá! Player quer fazer o formulário de MODGC? Entre no link: https://bit.ly/2FFC266 E Boa sorte!",
    "/comandos" : "       -=-=Comandos-=-=\n\n**:heavy_minus_sign: /ip**\n**:heavy_minus_sign: /pro**\n**:heavy_minus_sign: /youtuber**\n**:heavy_minus_sign: /youtuber+**\n**:heavy_minus_sign: /aplicar**\n**:heavy_minus_sign: /modgc**\n**:heavy_minus_sign: /comandos**\n**:heavy_minus_sign: /loja**\n**:heavy_minus_sign: /helper**\n**:heavy_minus_sign: /twitter**",
    "/loja" : "Está querendo comprar um vip? Entre em nossa loja. **loja-skyplay.tk**",
    "/helper" : "Olá! Player quer fazer o formulário de HELPER? Entre no link: https://bit.ly/2IVZ5vo E Boa sorte!",
    "/twitter" : "Nosso Twitter **https://twitter.com/RedeSkyPlay**",
  };
  
  if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
   } 
  });
  
  bot.on('ready', () => {
      console.log('Bot Launched...')


      bot.user.setStatus('Online')

      bot.user.setGame('SkyPlay.landhosting.net')

});
