import React, { useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import ImagesButton from './ImagesButton';
import RestaurantContext from '../RestaurantContext';

const Display = () => {
	const restaurantContext = useContext(RestaurantContext);
	const { restaurant, setRestaurant } = restaurantContext;
	//singapore's cooridnates
	const LATITUDE = 1.3521;
	const LONGITUDE = 103.8198;
	const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="restaurant"](around:5000,${LATITUDE},${LONGITUDE});out;`;

	const getRestaurant = async () => {
		const res = await fetch(url);
		const data = await res.json();
		setRestaurant(data.elements);
	};

	useEffect(() => {
		getRestaurant(); // Log restaurant data when it changes
	}, []);
	return (
		<div className="display">
			<h1>What do you feel like eating?</h1>
			<ImagesButton></ImagesButton>;
			<div className="anything row">
				<Button variant="outlined">Anything lor 🤡</Button>
				<button onClick={() => console.log()}>test</button>
			</div>
		</div>
	);
};

export default Display;
