import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import ImagesButton from './ImagesButton';
import { indigo } from '@mui/material/colors';

const Display = () => {
	// creating theme/styling
	const styling = {
		backgroundColor: 'rgba(255,255,255, 0.5)',
		borderColor: 'rgba(255,255,255, 0.7)',
		border: '2px solid rgba(128, 128, 128, 0.9)',
		borderRadius: '5px',
		padding: '16px',
		margin: '0 6rem 0 6rem',
	};
	return (
		<div className="display">
			<Box sx={styling}>
				<Typography variant="h4" textAlign={'center'}>
					What do you feel like eating?
				</Typography>
			</Box>
			<ImagesButton></ImagesButton>
			<div className="anything row">
				<Button
					variant="contained"
					sx={{
						backgroundColor: indigo[300],
						color: '#FFFFFF',
					}}
				>
					Anything lor 🤡
				</Button>
			</div>
		</div>
	);
};

export default Display;
