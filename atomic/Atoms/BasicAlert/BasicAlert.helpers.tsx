import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';

export const getIcon = (severity: string) => {
	switch (severity) {
		case 'success':
			return <CheckCircleIcon sx={{ marginRight: 1 }} />;
		case 'error':
			return <ErrorIcon sx={{ marginRight: 1 }} />;
		case 'warning':
			return <WarningIcon sx={{ marginRight: 1 }} />;
		case 'info':
			return <InfoIcon sx={{ marginRight: 1 }} />;
		default:
			return null;
	}
};