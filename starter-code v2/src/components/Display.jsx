import React, { useState, useEffect, useContext, useRef } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import ImagesButton from './ImagesButton';
import { indigo } from '@mui/material/colors';
import Anything from './Anything';
import RestaurantContext from '../RestaurantContext';
import { LoadingButton } from '@mui/lab';

const Display = (props) => {
	// creating theme/styling
	const styling = {
		backgroundColor: 'rgba(255,255,255, 0.5)',
		borderColor: 'rgba(255,255,255, 0.7)',
		border: '2px solid rgba(128, 128, 128, 0.9)',
		borderRadius: '5px',
		padding: '16px',
		margin: '0 6rem 0 6rem',
	};
	const inputSx = {
		margin: '0.5rem',
		display: 'flex',
		alignItems: 'center',
	};

	//state management
	const [showAnything, setShowAnything] = useState(false);
	const [latitude, setLatitude] = useState();
	const [longitude, setLongitude] = useState();
	const restaurantContext = useContext(RestaurantContext);
	const { setRestaurant, query, setQuery } = restaurantContext;
	const [isLoading, setIsLoading] = useState(false);

	//storing queried location from input box
	const handleOnChange = (event) => {
		setQuery(event.target.value);
	};

	const handleSubmit = async (event, location) => {
		event.preventDefault();
		setIsLoading(true); // start loading button

		try {
			await getLocation(location);
		} catch (err) {
			alert('Error fetching location. Please try again.');
		} finally {
			setIsLoading(false); // stop loading button
		}
	};

	useEffect(() => {
		getLocation(query);
	}, []);

	//reset location
	const handleReset = () => {
		setRestaurant([]);
		setQuery('');
	};

	const getLocation = async (location) => {
		const res = await fetch(
			`https://nominatim.openstreetmap.org/search?q=${location}&format=json&addressdetails=1&limit=1&countrycodes=SG`
		);
		if (!res.ok) {
			throw new Error('Something went wrong!');
		}
		const data = await res.json();

		// extracting latitude and longitude coordinates from geolocation query
		const { lat, lon } = data[0];
		setLongitude(lon);
		setLatitude(lat);
	};

	const handleOnClick = () => {
		showAnything ? setShowAnything(false) : setShowAnything(true);
	};

	return (
		<div className="display">
			<Box sx={styling}>
				<Typography variant="h4" textAlign={'center'}>
					What do you feel like eating?
				</Typography>
			</Box>
			{showAnything ? (
				<Anything></Anything>
			) : (
				<ImagesButton
					query={query}
					latitude={latitude}
					longitude={longitude}
				></ImagesButton>
			)}

			<div className="anything row">
				<Button
					variant="contained"
					sx={{
						backgroundColor: indigo[300],
						color: '#FFFFFF',
					}}
					onClick={handleOnClick}
				>
					{showAnything ? 'Decide again?' : 'Anything lor 🤡'}
				</Button>
				{!showAnything && (
					<Box sx={inputSx}>
						<TextField
							fullWidth
							id="filled-basic fullWidth"
							label="Where is your location?"
							variant="filled"
							sx={{ margin: '0.5rem', width: '200%' }}
							value={query}
							onChange={handleOnChange}
						/>
						<LoadingButton
							sx={{ width: '20%', height: '50%' }}
							variant="contained"
							onClick={(event) => handleSubmit(event, query)}
							loading={isLoading}
						>
							<span>Submit</span>
						</LoadingButton>

						<Button
							sx={{ width: '120%', height: '50%', marginLeft: '0.5rem' }}
							variant="contained"
							onClick={handleReset}
						>
							Reset Location
						</Button>
					</Box>
				)}
			</div>
		</div>
	);
};

export default Display;
