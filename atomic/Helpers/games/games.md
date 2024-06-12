add game config from config/appConfig (games/index.ts)
export const gameConfig = {
	setItemGames: [4, 6, 12],
	gamesWithWordAudio: [7, 8, 11, 13],
	gamesWithoutAudio: [10],
} as const;

declare gameDataConfig type here (gameData.config)
declare GameLevel and all other reusable types across all games here