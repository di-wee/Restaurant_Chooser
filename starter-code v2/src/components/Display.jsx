import React, { useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import ImagesButton from './ImagesButton';
import RestaurantContext from '../RestaurantContext';

const Display = (props) => {
	//managing states
	const restaurantContext = useContext(RestaurantContext);
	const { restaurant, setRestaurant, showList, setShowList } =
		restaurantContext;
	//singapore's coordinates
	const LATITUDE = 1.3521;
	const LONGITUDE = 103.8198;
	const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="restaurant"](around:5000,${LATITUDE},${LONGITUDE});out;`;

	const getRestaurant = async () => {
		const res = await fetch(url);
		const data = await res.json();
		setRestaurant(data.elements);
	};

	useEffect(() => {
		getRestaurant(); // get restaurant data on mount
	}, []);
	return (
		<div className="display">
			<h1>What do you feel like eating?</h1>
			<ImagesButton
				restaurant={restaurant}
				setRestaurant={setRestaurant}
				showList={showList}
				setShowList={setShowList}
				getRestaurant={getRestaurant}
			></ImagesButton>
			;
			<div className="anything row">
				<Button variant="outlined">Anything lor 🤡</Button>
				<button onClick={() => console.log()}>test</button>
			</div>
		</div>
	);
};

export default Display;
