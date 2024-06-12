add urls from config/appConfig (urls/index.ts)
export const urls = {
	app: '/twinkl-phonics',
	landingPage: '/phonics-app',
	premium: '/premium',
	assetPrefix: 'https://content.twinkl.co.uk/image/twinkl_phonics',
	audioInstructionURL: 'https://content.twinkl.co.uk/image/twinkl_phonics/audio/instructions',
	learnerSignOut: '/go/sign-out',
	learnerLogin: '/learn/dashboard',
} as const;

export type URL = keyof typeof urls;
export type URLs = typeof urls;
export type URLValue = URLs[URL];

+ add urls.ts from paths/urls.ts