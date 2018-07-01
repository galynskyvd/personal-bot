const commands = {
	START: '/start',
	ABOUT: ['владимир галынский', 'кто ты'],
	GOALS: 'цели',
	PROJECTS: 'проекты',
	CONTACTS: 'контакты',
	BLOG: 'блог',
	STATISTICS: '/stat'
};

const messages = {
	START: `Привет. Я рад тебя видеть у себя в гостях. Здесь ты можешь узнать обо мне поподробней.`,
	ABOUT: `Небольшая <a href='http://telegra.ph/Stoit-li-idti-k-Velikim-celyam-ili-pochemu-ya-lyublyu-riskovat-03-28'>история</a> о том как я иду к своей мечте`,
	GOALS: 'В ближайшее время планирую запустить несколько проектов',
	PROJECTS: `Сейчас у меня два запущенных проекта:\n@futcampru - Система умного дома\n@bricklyru - Разработка чат-ботов`,
	CONTACTS: 'По всем вопросам пиши @galynskyvd',
	BLOG: `<a href='https://t-do.ru/galynskyblog'>Подписывайся</a> на мой блог. Там хорошо!`,
	NOT_FOUND: 'К сожалению я не знаю такой команды.'
};

const buttons = {
	NAVIGATION: [
		'\u{1F466} Владимир Галынский',
		'\u{1F3AF} Цели',
		'\u{1F45C} Проекты',
		'\u{1F4F1} Контакты',
		'\u{1F4DD} Блог'
	]
};

module.exports = {messages, buttons, commands};