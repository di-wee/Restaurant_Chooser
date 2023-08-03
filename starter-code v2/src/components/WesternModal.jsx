import React, { useContext, useEffect } from 'react';
import {
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	Box,
	ButtonBase,
} from '@mui/material';
import './ImageButton.css';
import RestaurantContext from '../RestaurantContext';

const WesternModal = (props) => {
	//state management
	const restaurantContext = useContext(RestaurantContext);
	//to reset list without directly manipulating OG state; a shallow copy
	const { setFilteredRestaurant, setCafe, cafe, filteredRestaurant } =
		restaurantContext;
	const {
		setShowWestern,
		showWestern,
		restaurant,
		setShowList,
		latitude,
		longitude,
	} = props;

	//lat and long coordinates from display location
	const getCafe = async (latitude, longitude) => {
		const cafeUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="cafe"](around:5000,${latitude},${longitude});out;`;
		const res = await fetch(cafeUrl);
		const data = await res.json();
		setCafe(data.elements);
	};

	useEffect(() => {
		if (latitude && longitude) {
			// fetch data only when latitude and longitude are available cos async
			getCafe(latitude, longitude);
		}
	}, [latitude, longitude]);

	const images = [
		{
			url: '../../images/BurgersAndFries.png',
			title: 'Burgers & Fries',
			width: '25%',
			cuisine: 'burger',
		},
		{
			url: '../../images/mexican.png',
			title: 'Mexican Food',
			width: '25%',
			cuisine: 'mexican',
		},
		{
			url: '../../images/Italian.png',
			title: 'Italian',
			width: '25%',
			cuisine: 'italian',
		},
		{
			url: '../../images/steak.png',
			title: 'Steak house',
			width: '25%',
			cuisine: 'steak_house',
		},
		{
			url: '../../images/Fish&Chips.png',
			title: 'Fish & Chips',
			width: '25%',
			cuisine: 'fish_and_chips',
		},
		{
			url: '../../images/cafe.png',
			title: 'Cafe Food',
			width: '25%',
			cuisine: 'cafe',
		},
	];

	const filterRestaurant = (restcuisine) => {
		const filter = restaurant.filter(
			(place) => place.tags.cuisine === restcuisine && place.tags.name
		);
		setFilteredRestaurant(filter);
	};

	const filterCafe = () => {
		const filter = cafe.filter((place) => place.tags.name);
		setFilteredRestaurant(filter);
	};

	const handleClick = (item) => {
		switch (item.cuisine) {
			case 'burger':
				filterRestaurant(item.cuisine);
				break;
			case 'mexican':
				filterRestaurant(item.cuisine);
				break;
			case 'italian':
				filterRestaurant(item.cuisine);
				break;
			case 'steak_house':
				filterRestaurant(item.cuisine);
				break;
			case 'fish_and_chips':
				filterRestaurant(item.cuisine);
				break;
			case 'cafe':
				filterCafe();
				break;
		}
		console.log(filteredRestaurant);
		setShowWestern(false);
		setShowList(true);
	};
	const handleClose = () => {
		setShowWestern(false);
	};

	return (
		<Dialog onClose={handleClose} open={showWestern}>
			<DialogTitle style={{ textAlign: 'center' }}>Western Food</DialogTitle>
			<DialogContent dividers>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						minWidth: 600,
						width: '100%',
						justifyContent: 'center',
						justifyItems: 'center',
					}}
				>
					{images.map((image) => (
						<ButtonBase
							focusRipple
							key={image.title}
							className="imageButton"
							style={{
								width: image.width,
								margin: '1.5rem',
							}}
							onClick={() => handleClick(image)}
						>
							<span
								className="imageSrc"
								style={{ backgroundImage: `url(${image.url})` }}
							></span>
							<span className="imageBackdrop MuiImageBackdrop-root"></span>
							<span className="image">
								<Typography
									style={{
										position: 'relative',
										padding: '16px',
										paddingTop: '8px',
										paddingBottom: 'calc(8px + 6px)',
									}}
								>
									{image.title}
									<span className="imageMarked MuiImageMarked-root"></span>
								</Typography>
							</span>
						</ButtonBase>
					))}
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default WesternModal;
