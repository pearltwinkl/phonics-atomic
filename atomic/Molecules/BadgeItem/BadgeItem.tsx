import React from 'react';
import { getFillPercentage, BadgeItemProps } from './BadgeItem.helpers';

const BadgeItem: React.FC<BadgeItemProps> = ({
	item,
	index,
	countValue,
	badgeList,
	className = '',
	starBadge,
	showLinearProgress = true,
}) => {
    const fillPercentage = getFillPercentage(index, countValue, item, badgeList);
	const overlayWidth = 100 - fillPercentage;
    const pentagonTextColour = fillPercentage === 100 ? '#2173A7' : '#fff';
	return (
		<div className='badge__container'>
			<div
				className={`badge-item ${className} outline`}
				style={{ background: fillPercentage === 100 ? '#2173A7' : '#686E78' }}
			>
				<div
					className={`badge-item ${className}`}
					key={item.name}
				>
					<div
						className='overlay'
						style={{ width: `${overlayWidth}%` }}
					/>
					{starBadge
						&& (
							<div className='stars__container'>
								<StarIcon
									sx={{
										fontSize: '2rem',
										stroke: '#2173A7',
										strokeWidth: 0.6,
										color: fillPercentage >= 33 ? '#fbaf5d' : '#ddd',
									}}
								/>
								<StarIcon
									sx={{
										fontSize: '3rem',
										stroke: '#2173A7',
										strokeWidth: 0.6,
										color: fillPercentage >= 66 ? '#fbaf5d' : '#ddd',
									}}
								/>
								<StarIcon
									sx={{
										fontSize: '2rem',
										stroke: '#2173A7',
										strokeWidth: 0.6,
										color: fillPercentage === 100 ? '#fbaf5d' : '#ddd',
									}}
								/>
							</div>
						)}
					<span
						className='badge-text star'
						style={{
							top: starBadge ? '40%' : '55%',
							color: starBadge ? '#fff' : pentagonTextColour,
						}}
					>
						{item.value}
					</span>
				</div>
			</div>
			<span
				style={{
					color: fillPercentage === 100 ? '#000' : '#8190A0',
				}}
			>
				{item.name}
			</span>
			{showLinearProgress && fillPercentage !== 100
            && (
            	<BorderLinearProgress // atomic component
            		variant='determinate'
            		value={fillPercentage}
            	/>
            ) }
		</div>
	);
};

export default BadgeItem;