import React, { useContext, useEffect } from 'react';
import RestaurantContext from '../RestaurantContext';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const backgroundDesign = {
	margin: '4rem 20rem 1rem 20rem',
	height: '100%',
	padding: '2rem',
	backgroundColor: 'rgba(255,255,255, 0.7)',
	borderRadius: '2%',
	flexGrow: '2',
};
const Shortlist = () => {
	const restaurantContext = useContext(RestaurantContext);
	const { shortlistedRestaurant, setShortlistedRestaurant } = restaurantContext;

	const handleDelete = (places) => {
		const filtered = shortlistedRestaurant.filter((restaurant) => {
			return restaurant.tags.name !== places.tags.name;
		});

		setShortlistedRestaurant(filtered);
	};
	return (
		<div>
			<Grid container spacing={1} alignItems="center" justifyContent="center">
				<Grid item xs={12} md={10}>
					<Box sx={backgroundDesign}>
						<Typography variant="h6" sx={{ textAlign: 'center' }}>
							Shortlisted Restaurant
						</Typography>
						<Divider sx={{ margin: '1rem' }}></Divider>
						{shortlistedRestaurant.map((place) => (
							<Grid
								key={place.id}
								container
								item
								alignItems="center"
								justifyContent="space-between"
								padding={'1rem'}
							>
								<Grid item>
									<Typography>Name of Restaurant: {place.tags.name}</Typography>
								</Grid>
								<Grid item>
									<Button
										sx={{ backgroundColor: deepOrange[900], color: '#FFFFFF' }}
										variant="contained"
										onClick={() => handleDelete(place)}
									>
										Delete
									</Button>
								</Grid>
							</Grid>
						))}
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Shortlist;
