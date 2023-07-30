import React, { useContext } from 'react';
import { Button } from '@mui/material';
import ImagesButton from './ImagesButton';
import RestaurantContext from '../RestaurantContext';

const Display = () => {
	return (
		<div className="display">
			<h1>What do you feel like eating?</h1>
			<ImagesButton></ImagesButton>
			<div className="anything row">
				<Button variant="contained">Anything lor 🤡</Button>
			</div>
		</div>
	);
};

export default Display;
