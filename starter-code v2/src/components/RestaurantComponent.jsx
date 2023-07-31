import { Delete } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import RestaurantContext from '../RestaurantContext';
import StarIcon from '@mui/icons-material/Star';
import { indigo, deepOrange } from '@mui/material/colors';

const RestaurantComponent = (props) => {
	const restaurantContext = useContext(RestaurantContext);
	const {
		filteredRestaurant,
		filteredCafe,
		setFilteredRestaurant,
		setShowList,
	} = restaurantContext;
	const buttonStyle = {
		width: '20%',
		padding: '2px',
		margin: '2rem',
	};
	const cantDecide = () => [setShowList(false)];
	const firstFiveRest = filteredRestaurant.slice(0, 5);
	return (
		<Grid container spacing={1} marginLeft={'6rem'}>
			{firstFiveRest.map((place) => (
				<Grid item md={5} key={place.id}>
					<div className="restList">
						<Typography>
							Name of Restaurant:{' '}
							{filteredRestaurant ? place.tags.name : setFilteredRestaurant([])}
						</Typography>
						<Button
							sx={{ backgroundColor: indigo[300], color: '#FFFFFF' }}
							variant="contained"
							startIcon={<StarIcon></StarIcon>}
						>
							Shortlist
						</Button>
						<Button
							sx={{ backgroundColor: deepOrange[900], color: '#FFFFFF' }}
							variant="contained"
							startIcon={<Delete></Delete>}
						>
							Delete
						</Button>
					</div>
				</Grid>
			))}
			<Button sx={buttonStyle} onClick={cantDecide} variant="contained">
				Can't Decide?
			</Button>
		</Grid>
	);
};

export default RestaurantComponent;
