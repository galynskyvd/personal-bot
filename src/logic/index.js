const API = require('../api');
const Helpers = require('../helpers');
const {users: {admin}} = require('../config/options.json');
const {commands, messages, buttons} = require('../constants');

module.exports = async (params) => {
	const {
		text: command,
		from: {id: userId}
	} = params;
	const isAdmin = Helpers.checkAccess(userId, admin);

	if (Helpers.checkCommand(command, commands.START)) {
		await API.addVisitors(userId);

		return {
			response: messages.START,
			options: {
				...Helpers.getNavigation(buttons.NAVIGATION),
				parse_mode: 'HTML'
			}
		};
	} else if (Helpers.checkCommand(command, commands.ABOUT)) {
		return {
			response: messages.ABOUT,
			options: {
				parse_mode: 'HTML'
			}
		};
	} else if (Helpers.checkCommand(command, commands.GOALS)) {
		return {
			response: messages.GOALS
		};
	} else if (Helpers.checkCommand(command, commands.PROJECTS)) {
		const {data: {projects}} = await API.getProjects();
		const convertProjects = projects.map(({name, site, description}, index) => {
			return `${index + 1}. <a href='${site}'>${name}</a> - ${description}\n`;
		}).join('');
		const result = `Мои проекты:\n${convertProjects}`;

		return {
			response: result,
			options: {
				parse_mode: 'HTML'
			}
		};
	} else if (Helpers.checkCommand(command, commands.CONTACTS)) {
		return {
			response: messages.CONTACTS,
			options: {
				parse_mode: 'HTML'
			}
		};
	} else if (Helpers.checkCommand(command, commands.BLOG)) {
		return {
			response: messages.BLOG,
			options: {
				parse_mode: 'HTML'
			}
		};
	} else if (Helpers.checkCommand(command, commands.STATISTICS) && isAdmin) {
		const {data: {today, all}} = await API.getVisitors();
		const result = `Статистика:\nСегодня: <b>${today.length}</b> человек\nВсего: <b>${all.length}</b> человек`;

		return {
			response: result,
			options: {
				parse_mode: 'HTML'
			}
		};
	} else {
		return {
			response: messages.NOT_FOUND
		};
	}
};