add colors from config/appConfig (colors/index.ts)
export const colors = {
	check: '#8fbf40',
	settings: '#FF9440',
	darkLevel2: '#E94E14',
	minibooks: '#F066AB',
    confetti1: '#f05a25',
    ...
} as const;

export type Color = keyof typeof colors;
export type Colors = typeof colors;
export type ColorValue = Colors[Color];