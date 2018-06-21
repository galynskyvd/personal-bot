const Helpers = require('../helpers');
const {commands, messages, buttons} = require('../constants');

module.exports = (command) => {
	if (Helpers.checkCommand(command, commands.PROJECTS)) {
		return {
			response: `Сейчас у меня 2 проекта`
		};
	} else if (Helpers.checkCommand(command, commands.START)) {
		return {
			response: messages.START,
			options: {
				...Helpers.getButtons(buttons),
				parse_mode: 'HTML'
			}
		};
	} else if (Helpers.checkCommand(command, commands.DOING)) {
		return {
			response: `На данный момент я работаю Front-end разработчиком`,
		}
	} else {
		return {
			response: messages.NOT_FOUND,
			options: Helpers.checkCommand(buttons)
		};
	}
};