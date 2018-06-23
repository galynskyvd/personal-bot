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
	},
	getRandomItems(list) {
		return list.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]).slice(0, 2);
	}
};

module.exports = methods;