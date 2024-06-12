export const getFillPercentage = (index, countValue, item, badgeList) => {
    let fillPercentage = 0;
	if (index === 0) {
		if (countValue >= item.value) {
			fillPercentage = 100;
		} else if (countValue > 0) {
			fillPercentage = (countValue / item.value) * 100;
		}
	} else {
		// Only for subsequent badges
		const prevBadgeValue = badgeList[index - 1].value;
		if (countValue > prevBadgeValue) {
			// Calculate percentage based on how much countValue exceeds previous badge's value
			fillPercentage = ((countValue - prevBadgeValue) / (item.value - prevBadgeValue)) * 100;
			// Ensure it doesn't go beyond 100
			fillPercentage = Math.min(fillPercentage, 100);
		}
	}
    return fillPercentage;
};

export interface BadgeItemProps {
    item: {
        value: number;
        name: string;
    };
    index: number;
    countValue: number;
    badgeList: Array<{value: number, name: string}>;
    className?: string;
    starBadge?: boolean;
    showLinearProgress?: boolean;
};