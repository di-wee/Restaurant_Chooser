import React, { useContext } from 'react';
import Display from '../components/Display';
import RestaurantContext from '../RestaurantContext';
import { Box } from '@mui/material';
import '@fontsource/roboto-condensed';
import RestaurantComponent from '../components/RestaurantComponent';

//styling for MUI
const backgroundDesign = {
	margin: '2rem 20rem 0 20rem',
	height: '100%',
	padding: '2rem',
	backgroundColor: 'rgba(255,255,255, 0.7)',
	borderRadius: '2%',
	flexGrow: '2',
};
const Main = () => {
	const restaurantContext = useContext(RestaurantContext);
	//to swop out RestaurantComponent with Display once food selection is chosen
	const { showList } = restaurantContext;

	return (
		<div>
			<Box sx={backgroundDesign}>
				{showList ? (
					<RestaurantComponent></RestaurantComponent>
				) : (
					<Display></Display>
				)}
			</Box>
		</div>
	);
};

export default Main;
