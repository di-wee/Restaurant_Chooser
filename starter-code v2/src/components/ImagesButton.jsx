import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './ImageButton.css';
import AsianModal from './AsianModal';
import WesternModal from './WesternModal';
import RestaurantContext from '../RestaurantContext';

const ImagesButton = (props) => {
	//state management
	const restaurantContext = useContext(RestaurantContext);
	const { restaurant, setRestaurant, showList, setShowList } =
		restaurantContext;
	const { latitude, longitude, query } = props;

	//states for modals opening and closing
	const [showAsian, setShowAsian] = useState(false);
	const [showWestern, setShowWestern] = useState(false);

	// long and lat coordinates gotten from display
	const getRestaurant = async (latitude, longitude) => {
		//clearing previous restaurant data
		setRestaurant([]);
		const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="restaurant"](around:3000,${latitude},${longitude});out;`;
		const res = await fetch(url);
		const data = await res.json();
		setRestaurant(data.elements);
	};

	useEffect(() => {
		if (latitude && longitude) {
			// fetch data only when latitude and longitude are available cos async
			getRestaurant(latitude, longitude);
		}
	}, [latitude, longitude]);

	const images = [
		{
			url: '../../images/asian.png',
			title: 'Asian Food',
			width: '35%',
		},
		{
			url: '../../images/western.png',
			title: 'Western Food',
			width: '35%',
		},
	];

	//for modal to appear
	const handleOnClick = (image) => {
		//empty input box
		if (!query) {
			return alert('Please enter your location!');
		}
		if (image.title === 'Asian Food') {
			setShowAsian(true);
			console.log(latitude);
			console.log(longitude);
			console.log(restaurant);
		} else {
			setShowWestern(true);
			console.log('western');
		}
	};

	return (
		<div className="buttons">
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					minWidth: 300,
					width: '100%',
					justifyContent: 'center',
				}}
			>
				{images.map((image) => (
					<ButtonBase
						focusRipple
						key={image.title}
						className="imageButton"
						sx={{
							width: image.width,
							margin: '1.5rem',
						}}
						onClick={() => {
							handleOnClick(image);
						}}
					>
						<span
							className="imageSrc"
							style={{ backgroundImage: `url(${image.url})` }}
						></span>
						<span className="imageBackdrop"></span>
						<span className="image">
							<Typography
								sx={{
									position: 'relative',
									padding: '16px',
									paddingTop: '8px',
									paddingBottom: '14px',
								}}
							>
								{image.title}
								<span className="imageMarked"></span>
							</Typography>
						</span>
					</ButtonBase>
				))}
			</Box>

			{showAsian && (
				<AsianModal
					showAsian={showAsian}
					setShowAsian={setShowAsian}
					restaurant={restaurant}
					setRestaurant={setRestaurant}
					showList={showList}
					setShowList={setShowList}
					getRestaurant={getRestaurant}
				></AsianModal>
			)}
			{showWestern && (
				<WesternModal
					showWestern={showWestern}
					setShowWestern={setShowWestern}
					restaurant={restaurant}
					setRestaurant={setRestaurant}
					showList={showList}
					setShowList={setShowList}
				></WesternModal>
			)}
		</div>
	);
};

export default ImagesButton;
