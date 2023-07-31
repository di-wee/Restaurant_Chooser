import { Button, Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import RestaurantContext from '../RestaurantContext';
import { indigo } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const RestaurantComponent = (props) => {
	const restaurantContext = useContext(RestaurantContext);
	const { filteredRestaurant, setFilteredRestaurant, setShowList } =
		restaurantContext;
	const [shortlist, setShortlist] = useState({});
	//setting boolean; true/ false to filtered restaurant. if previously true, then set to false. vice versa
	const handleShortlist = (placeID) => {
		setShortlist((prev) => ({
			...prev,
			[placeID]: !prev[placeID],
		}));
	};

	const buttonStyle = {
		width: '20%',
		padding: '2px',
		margin: '2rem',
	};
	const cantDecide = () => setShowList(false);
	const firstFiveRest = filteredRestaurant.slice(0, 5);
	return (
		<Grid container spacing={1} marginLeft={'6rem'}>
			{firstFiveRest.map((place) => (
				<Grid item md={5} key={place.id}>
					<div className="restList">
						<Typography>
							Name of Restaurant: {/* to reset selection */}
							{filteredRestaurant ? place.tags.name : setFilteredRestaurant([])}
						</Typography>
						<Button
							sx={{ backgroundColor: indigo[300], color: '#FFFFFF' }}
							variant="contained"
							// directly acessing the true/false value of each keyvalue pair
							startIcon={
								shortlist[place.id] ? (
									<StarIcon></StarIcon>
								) : (
									<StarBorderIcon></StarBorderIcon>
								)
							}
							onClick={() => handleShortlist(place.id)}
							id={place.id}
						>
							Shortlist
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
