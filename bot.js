const Discord = require("discord.js");
const bot = new Discord.Client();

const cheerio = require('cheerio');

const request = require('request');
const { randomBytes } = require("crypto");

const PREFIX = '-';

bot.on('ready', () =>{
        console.log('This bot is online!');
        bot.user.setActivity('Twicelights', { type: 'WATCHING'});

});

bot.on('message', message => {
    if (message.content.startsWith (PREFIX + "random")) {
        number = 352;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./images/" + imageNumber + ".gif"]});
    }    

    if (message.content.startsWith (PREFIX + "chaeyoung")) {
        number = 43;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./chaeyoung/" + imageNumber + ".gif"]});
    }    

    if (message.content.startsWith (PREFIX + "dahyun")) {
        number = 42;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./dahyun/" + imageNumber + ".gif"]});
    }    
    
    if (message.content.startsWith (PREFIX + "jeongyeon")) {
        number = 13;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./jeongyeon/" + imageNumber + ".gif"]});
    }    
        
    if (message.content.startsWith (PREFIX + "jihyo")) {
        number = 44;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./jihyo/" + imageNumber + ".gif"]});
    }    
    
    if (message.content.startsWith (PREFIX + "mina")) {
        number = 31;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./mina/" + imageNumber + ".gif"]});
    }    
        
    if (message.content.startsWith (PREFIX + "momo")) {
        number = 41;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./momo/" + imageNumber + ".gif"]});
    } 
        
    if (message.content.startsWith (PREFIX + "nayeon")) {
        number = 41;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./nayeon/" + imageNumber + ".gif"]});
    }        

    if (message.content.startsWith (PREFIX + "sana")) {
        number = 47;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./sana/" + imageNumber + ".gif"]});
    }       
        
    if (message.content.startsWith (PREFIX + "tzuyu")) {
        number = 47;
        imageNumber = Math.floor (Math.random() * number) + 1;
        message.channel.send ({files: ["./tzuyu/" + imageNumber + ".gif"]});
    }    
    
});


bot.login(process.env.BOT_TOKEN);
