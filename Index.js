const discord = require('discord.js');
const client = new discord.Client();

client.on('Tamo activo, tamo activo, tamo en vivooo', () => {
    console.log(`logeado como ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!presentacion'){
        msg.reply('Hola mi nombre es fran bot, ayudante de dios.');
    }
});

client.login('ODIzNzg5ODAzNTg1NTM2MDAw.YFl8Cg.6sDKkg5PiiE8-TPNyxgtwnuor7A')