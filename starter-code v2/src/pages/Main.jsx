import React, { useContext } from 'react';
import Display from '../components/Display';
import RestaurantContext from '../RestaurantContext';
import { Box } from '@mui/material';
import '@fontsource/roboto-condensed';
import RestaurantComponent from '../components/RestaurantComponent';

//styling for MUI
const backgroundDesign = {
	margin: '4rem 20rem 1rem 20rem',
	height: '100%',
	padding: '2rem',
	backgroundColor: 'rgba(255,255,255, 0.7)',
	borderRadius: '2%',
	flexGrow: '2',
};
const Main = () => {
	//managing states for usage
	const restaurantContext = useContext(RestaurantContext);
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
