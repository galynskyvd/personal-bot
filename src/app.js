const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const {bot: {token, host, port}} = require('./config/options.json');

const bot = new TelegramBot(token);
const app = express();

bot.setWebHook(`${host}/bot${token}`);

app.use(bodyParser.json());

app.post(`/bot${token}`, (req, res) => {
	bot.processUpdate(req.body);
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`Express server is listening on ${port}`);
});

bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, 'I am alive!');
});