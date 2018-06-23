const commands = {
	PROJECTS: 'projects',
	DOING: 'doing',
	CONTACTS: 'contacts',
	START: '/start'
};

const messages = {
	START: `Привет. Я рад тебя видеть у себя в гостях. Здесь ты можешь узнать обо мне поподробней.`,
	NOT_FOUND: 'К сожалению я не знаю такой команды. Вот что я умею.'
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
	{
		title: 'Контакты',
		value: 'contacts'
	}
];

module.exports = {messages, buttons, commands};