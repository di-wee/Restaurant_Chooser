import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const RestaurantComponent = (props) => {
	const { restaurant, setRestaurant } = props;
	const firstFiveRest = restaurant.slice(0, 5);
	return (
		<div>
			{firstFiveRest.map((place) => {
				return (
					<>
						<div>Name of Restaurant: {place.tags.name} </div>
						<Button variant="outlined">Shortlist</Button>
						<Button variant="outlined" startIcon={<Delete />}>
							Delete
						</Button>
					</>
				);
			})}
		</div>
	);
};

export default RestaurantComponent;
