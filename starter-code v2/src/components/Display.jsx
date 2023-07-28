import React from 'react';
import { Button } from '@mui/material';
import ImagesButton from './ImagesButton';

const Display = () => {
	return (
		<div className="display">
			<h1>What do you feel like eating?</h1>

			<ImagesButton></ImagesButton>

			<div className="anything row">
				<Button variant="outlined">Anything lor</Button>
			</div>
		</div>
	);
};

export default Display;
