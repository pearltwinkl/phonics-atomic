import * as React from 'react';
import { FadeInDiv, StyledAlert, IconWrapper } from './BasicAlert.styles';
import { BasicAlertProps } from './BasicAlert.types';
import { getIcon } from './BasicAlert.helpers';

export default function BasicAlert({ severity, message }: BasicAlertProps) {
	return (
		<FadeInDiv data-testid='fade-in-div'>
			<StyledAlert data-testid='basic-alert'>
				<IconWrapper>{getIcon(severity)}</IconWrapper>
				{message}
			</StyledAlert>
		</FadeInDiv>
	);
}
