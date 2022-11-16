import rss from '@astrojs/rss';

export const get = () => rss({
	title: 'Rainer Kildal | Blog',
	description: 'My journey learning Astro',
	site: 'https://xerinox.netlify.app',
	items: import.meta.glob('./**/*.md'),
	customData: `<language>en-us</language>`,
});
