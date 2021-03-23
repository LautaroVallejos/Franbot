                    //Proyecto franbot-discord 6 1era programacion

//autor: Lautaro Vallejos

//co-autores: -

//Recursos
//Se importa la API de discord.js  
const discord = require('discord.js');  
const fs = require('fs');

//declaracion de constantes
const version = 1.1
const client = new discord.Client(); //Se crea la instancia del cliente de discord (bot) en una constante

//Cuando se inicializa el bot te muestra este mensaje por consola
client.on('ready', () => {
    console.log(`El bot esta listo como ${client.user.tag}!`);
});

client.on('message', message => {
    //Si el mensajae es !presentacion
    if (message.content.toLocaleLowerCase() === '!presentacion'){
        //Enviale el mensaje de presentacion
        message.reply(`Hola, mucho gusto amo ${message.author}. Soy Franbot en su version ${version}, mi labor es facilitarles las tareas bajo ordenes del lindo de Lauchita todo poderoso, sera un gusto estar a su servicio.`);

    }
});

client.on('message', message => {
    //Si el mensaje es !cum
    if(message.content.toLocaleLowerCase() === "!cum"){
        //Se imprime el mensaje en el chat
        message.reply(`Yamete Kudasai ${message.author}-sama`)
        //Se crea una constante que almacena la imagen
        const attachment = new discord.MessageAttachment('https://cdn.discordapp.com/attachments/823831377194516480/823832066499805187/descarga_2.jpg')
        //Se envia la imagen
        message.channel.send(attachment);
    }
})

client.login('ODIzNzg5ODAzNTg1NTM2MDAw.YFl8Cg.8wwmpMNDojmVX4wR_el4vdiAGUk')