const Helpers = require('../helpers');
const {commands, messages, buttons} = require('../constants');

module.exports = async (command) => {
	if (Helpers.checkCommand(command, commands.PROJECTS)) {
		const list = Helpers.getRandomItems(buttons);

		return {
			response: `Сейчас у меня 2 проекта:\n<b>Futcamp</b> - Система умного дома\n<b>Ladnosvet</b> - Интернет-магазин светильников и лампочек`,
			options: {
				...Helpers.getButtons(list),
				parse_mode: 'HTML'
			}
		};
	} else if (Helpers.checkCommand(command, commands.START)) {
		const list = Helpers.getRandomItems(buttons);

		return {
			response: messages.START,
			options: {
				...Helpers.getButtons(list),
				parse_mode: 'HTML'
			}
		};
	} else if (Helpers.checkCommand(command, commands.DOING)) {
		const list = Helpers.getRandomItems(buttons);

		return {
			response: 'На данный момент я работаю Front-end разработчиком',
			options: Helpers.getButtons(list)
		};
	} else if (Helpers.checkCommand(command, commands.CONTACTS)) {
		const list = Helpers.getRandomItems(buttons);

		return {
			response: `Написать можно <a href='tg://user?id=424572788'>сюда</a>`,
			options: {
				...Helpers.getButtons(list),
				parse_mode: 'HTML'
			}
		};
	} else {
		const list = Helpers.getRandomItemInArray(buttons);

		return {
			response: messages.NOT_FOUND,
			options: Helpers.getButtons(list)
		};
	}
};