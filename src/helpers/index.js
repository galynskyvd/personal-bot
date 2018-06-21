const methods = {
	getButtons(list) {
		return {
			reply_markup: JSON.stringify({
				inline_keyboard: [
					list.map(({title, value}) => ({
						text: title,
						callback_data: value
					}))
				]
			})
		}
	},
	checkCommand(command, listCommands) {
		const phrase = command.trim().toLowerCase();

		if (typeof listCommands === 'string') {
			return phrase === listCommands;
		} else {
			return listCommands.some(item => item === phrase);
		}
	}
};

module.exports = methods;