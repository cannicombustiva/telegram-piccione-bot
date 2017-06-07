'use strict'

const Telegram = require('telegram-node-bot'),

 tg = new Telegram.Telegram('389439591:AAGp78T1bCV3WI0kr0Q03RjxZH-ow1QfwzY',{
    workers: 1
});

const PingController = require('./controllers/ping')
, OtherwiseController = require('./controllers/otherwise');

tg.router
    .when(
        new Telegram.TextCommand('/ping', 'pingCommand'), new PingController())
        .otherwise(new OtherwiseController());