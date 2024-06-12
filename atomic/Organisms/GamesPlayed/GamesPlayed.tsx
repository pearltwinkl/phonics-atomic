import React from 'react';
import BadgeItem from '../../Molecules/BadgeItem';
import { GENERAL_GAMES_PLAYED } from './GamesPlayed.helpers';

const GamesPlayed = () => (
    <div className='badges__container top'>
		{GENERAL_GAMES_PLAYED.map((item, index) => (
			<BadgeItem
				key={item.name}
				item={item}
				index={index}
				countValue={totalPlayedCount}
				badgeList={GENERAL_GAMES_PLAYED}
			/>
		))}
	</div>
);

export default GamesPlayed;