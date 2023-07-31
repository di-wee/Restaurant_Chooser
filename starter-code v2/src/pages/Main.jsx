import React, { useState } from 'react';
import Display from '../components/Display';
import List from '../components/List';
import RestaurantContext from '../RestaurantContext';
import { Box } from '@mui/material';
import '@fontsource/roboto-condensed';

const backgroundDesign = {
	margin: '4rem 12rem 1rem 12rem',
	height: '100%',
	padding: '2rem',
	backgroundColor: 'rgba(255,255,255, 0.7)',
	borderRadius: '2%',
	flexGrow: '1',
};
const Main = () => {
	//managing states for usage
	const [restaurant, setRestaurant] = useState([]);
	const [cafe, setCafe] = useState([]);
	const [showList, setShowList] = useState(false);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	return (
		<div>
			<RestaurantContext.Provider
				value={{
					restaurant,
					setRestaurant,
					showList,
					setShowList,
					filteredRestaurant,
					setFilteredRestaurant,
					cafe,
					setCafe,
				}}
			>
				<Box sx={backgroundDesign}>
					{showList ? <List></List> : <Display></Display>}
				</Box>
			</RestaurantContext.Provider>
		</div>
	);
};

export default Main;
