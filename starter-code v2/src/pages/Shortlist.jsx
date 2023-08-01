import React, { useContext, useEffect } from 'react';
import RestaurantContext from '../RestaurantContext';
import { Box, Button, Divider, Typography } from '@mui/material';
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
	const {
		shortlistedRestaurant,
		setShortlistedRestaurant,
		setShalowCopy,
		shallowCopy,
	} = restaurantContext;

	const handleDelete = (index) => {
		shortlistedRestaurant.splice(index, 1);
	};

	useEffect(() => {}, [shortlistedRestaurant]);

	return (
		<div>
			<Box sx={backgroundDesign}>
				<Typography variant="h6" sx={{ textAlign: 'center' }}>
					Shortlisted Restaurant
				</Typography>
				<Divider sx={{ margin: '1rem' }}></Divider>
				{shortlistedRestaurant.map((place, index) => {
					return (
						<div>
							<Typography>Restaurant: {place.tags.name}</Typography>
							<Button
								sx={{ backgroundColor: deepOrange[900], color: '#FFFFFF' }}
								variant="contained"
								onClick={() => handleDelete(index)}
							>
								Delete
							</Button>
						</div>
					);
				})}
			</Box>
		</div>
	);
};

export default Shortlist;
