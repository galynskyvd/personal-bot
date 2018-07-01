const request = require('axios');
const {api: {host}} = require('../config/options.json');

const methods = {
	async addVisitors(userId) {
		await request.post(`${host}/addVisitor`, {
			userId
		});
	},
	async getVisitors() {
		return await request.get(`${host}/getVisitors`);
	},
	async getProjects() {
		return await request.get(`${host}/getProjects`);
	}
};

module.exports = methods;