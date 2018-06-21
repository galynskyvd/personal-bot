const commands = {
	PROJECTS: 'projects',
	DOING: 'doing',
	START: '/start'
};

const messages = {
	START: `Привет. Я рад тебя видеть у себя в гостях. Здесь ты можешь узнать обо мне поподробней`,
	NOT_FOUND: 'К сожалению я не знаю такой команды'
};

const buttons = [
	{
		title: 'Проекты',
		value: 'projects'
	},
	{
		title: 'Деятельность',
		value: 'doing'
	},
];

module.exports = {messages, buttons, commands};