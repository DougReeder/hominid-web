const { TIMESTAMPS, MODE, computeDate } = require('@web-alchemy/eleventy-plugin-content-dates');

module.exports = {
	eleventyComputed: {
		dateLastModified: async function(data) {
			try {
				if ('build' === data.eleventy.env.runMode) {
					const gitDate = await computeDate({
						strategy: TIMESTAMPS.GIT_LAST_MODIFIED,
						mode: MODE.ASYNC,
						contentPath: data.page.inputPath,
					});
					return gitDate instanceof Date ? gitDate : data.page.date || new Date()
				} else {
					return data.page.date || new Date();
				}
			} catch (err) {
				return data.page.date || new Date();
			}
		},
	},
}
