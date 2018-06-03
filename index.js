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
    ".ip" : "*Minecraft Server IP:* **Mc-FreePvP.tk**",
    ".twitter" : "*Twitter Do Servidor:* ***https://goo.gl/auNMLj***",
    ".loja" : "Em Breve no Momento Compre VIP diretamente Com o DONO Na Sua DM",
    ".yt" : "- Tags YT's\n\n- @YT+ = 3K DE SUBS + 300 LIKES NO VIDEO COM 1K DE VIEWS\n+ VIDEO NO SERVIDOR MENSALEMENTE E A CONFIANÇA DO DONO\n CASO NAO TENHA VIDEO MENSALMENTE SUA TAG SERA RETIRADA\n\n- @YT = 300 SUBS + 30 LIKES NO VIDEO COM 100 VIEWS\n VIDEO NO SERVIDOR MENSALMENTE CASO NAO TENHA VIDEO\n MENSALMENTE SUA TAG SERA RETIRADA.\n\n- @YTm = 150 SUBS + 15 LIKES NO VIDEO COM 100 VIEWS\nVIDEO NO SERVIDOR MENSALMENTE CASO NAO TENHA VIDEO\n MENSALMENTE SUA TAG SERA RETIRADA.\n\nCASO PEGUE OS REQUISITOS, MANDE SEU VIDEO\nPARA UM STAFF MANAGER EM NOSSO DISCORD: https://discord.gg/HmT6UMb",
    ".equipe" : "                -=-=DONOS-=-=\n\n:heavy_minus_sign: <@431929519503572992>\n:heavy_minus_sign: <@296066763714723841>\n:heavy_minus_sign: <@238758816995475459>\n\n       -=-=GERENTES-=-=\n\n:heavy_minus_sign: <@368849156854513664>\n:heavy_minus_sign: <@445341947574353941>\n\n     -=-=CORDENADORES-=-=\n\n:heavy_minus_sign: <@383831800033574913>\n\n    -=-=STAFFS MANAGERS-=-=\n\n:heavy_minus_sign: <@340630725726437376>\n\n        -=-=ADMINS-=-=\n\n:heavy_minus_sign: <@340630725726437376>\n\n         -=-=DEVs-=-=\n\n:heavy_minus_sign: <@390915184748920842>\n:heavy_minus_sign: <@446694721943896074>\n\n        -=-=MODGC's-=-=\n\n:heavy_minus_sign: <@355040380636364821>\n:heavy_minus_sign: <@439225322093805568>\n:heavy_minus_sign: <@381917332022362123>\n\n                  -=-=MOD's-=-=\n\n:heavy_minus_sign: <@432208108857720832>\n:heavy_minus_sign: <@444245127360282650>\n\n         -=-=TRIAIS-=-=\n\n:heavy_minus_sign: <@339820719586148352>\n:heavy_minus_sign: <@368413260069863454>\n\n         -=-=AJUDANTE's-=-=\n\n:heavy_minus_sign: <@339497689123127298>\n\n         -=-=BUILDER's-=-=\n\n:heavy_minus_sign: <@401810556752887810>\n:heavy_minus_sign: <@325046217904226306>",
    ".aplicar" : "Aplicaçao Em Aberta Comversar Com Algum STAFF MANAGER",
    ".comandos" : "            -=-=Comandos-=-=\n\n**:heavy_minus_sign: .ip**\n**:heavy_minus_sign: .twitter**\n**:heavy_minus_sign: .loja**\n**:heavy_minus_sign: .yt**\n**:heavy_minus_sign: .equipe**\n**:heavy_minus_sign: .aplicar**\n**:heavy_minus_sign: .comandos**\n**:heavy_minus_sign: .regras**",
    ".regras" : "@here -=-=-=Regras Do Servidor-=-=-=\n\n:heavy_minus_sign: Não seja desrespeitoso com outros usuários na discord.\n:heavy_minus_sign: Não faça spam em nenhum dos chats.\n:heavy_minus_sign: Não use termos racistas / sexistas / homofóbicos para insultar alguém.\n:heavy_minus_sign: Não compartilhe ou peça informações pessoais de ninguém.\n:heavy_minus_sign: Não envie ameaças DDoS ou participe de comédia DDoS.\n:heavy_minus_sign: Não venda contas, isso não é um mercado.\n:heavy_minus_sign: Não Pratique RACISMO ou APOLOGIA ao CRIME = WARN.\n:heavy_minus_sign: YT's Obrigatorio Uso de Discord no server, caso contrario = RETIRAMENTO DE TAG.",
  };
  
  if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
   } 
  });
  
  bot.on('ready', () => {
      console.log('Bot Launched...')


      bot.user.setStatus('dnd')

      bot.user.setGame('Mc-FreePvP.tk')

});
