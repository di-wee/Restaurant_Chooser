import { Delete } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import RestaurantContext from '../RestaurantContext';
import StarIcon from '@mui/icons-material/Star';

const RestaurantComponent = (props) => {
	const restaurantContext = useContext(RestaurantContext);
	const { filteredRestaurant, filteredCafe, setFilteredRestaurant } =
		restaurantContext;

	const firstFiveRest = filteredRestaurant.slice(0, 5);
	return (
		<Grid container spacing={1} marginLeft={'8rem'} marginTop={'1rem'}>
			{firstFiveRest.map((place) => (
				<Grid item md={5} key={place.id}>
					<div className="restList">
						<Typography>
							Name of Restaurant:{' '}
							{filteredRestaurant ? place.tags.name : setFilteredRestaurant([])}
						</Typography>
						<Button variant="outlined" startIcon={<StarIcon></StarIcon>}>
							Shortlist
						</Button>
						<Button variant="outlined" startIcon={<Delete></Delete>}>
							Delete
						</Button>
					</div>
				</Grid>
			))}
		</Grid>
	);
};

export default RestaurantComponent;
