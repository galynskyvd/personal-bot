const methods = {
	getNavigation(list) {
		return {
			reply_markup: JSON.stringify({
				keyboard: [[list[0]], [list[1], list[2]], [list[3], list[4]]]
			})
		}
	},
	checkCommand(command, listCommands) {
		const phrase = this.removeInvalidChars(command);

		if (typeof listCommands === 'string') {
			return phrase === listCommands;
		} else {
			return listCommands.some(item => item === phrase);
		}
	},
	removeInvalidChars(command) {
		return command.replace(/[\uD800-\uDFFF]./g, '').trim().toLowerCase();
	},
	checkAccess(userId, adminId) {
		if (typeof adminId === 'number') {
			return userId === adminId;
		} else {
			return adminId.some(item => item === userId);
		}
	}
};

module.exports = methods;