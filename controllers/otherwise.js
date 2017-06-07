'use-strict';

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
    handle($) {
        $.sendMessage('Mpa parra potabbili');
    }
}

module.exports = OtherwiseController;