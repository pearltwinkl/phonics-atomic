const StarsEarned = () => (
    <div className='badges__container bottom'>
		{GENERAL_STARS_EARNED.map((item, index) => (
			<BadgeItem
				key={item.name}
				item={item}
				index={index}
				countValue={totalStarCount}
				badgeList={GENERAL_STARS_EARNED}
				className='circle'
				starBadge
			/>
		))}
	</div>
);

export default StarsEarned;