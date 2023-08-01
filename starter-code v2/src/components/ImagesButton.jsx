import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './ImageButton.css';
import AsianModal from './AsianModal';
import WesternModal from './WesternModal';
import RestaurantContext from '../RestaurantContext';

const ImagesButton = () => {
	const restaurantContext = useContext(RestaurantContext);
	const { restaurant, setRestaurant, showList, setShowList } =
		restaurantContext;

	//states for modals opening and closing
	const [showAsian, setShowAsian] = useState(false);
	const [showWestern, setShowWestern] = useState(false);

	//singapore's coordinates
	const LATITUDE = 1.3521;
	const LONGITUDE = 103.8198;
	const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="restaurant"](around:5000,${LATITUDE},${LONGITUDE});out;`;
	const getRestaurant = async () => {
		const res = await fetch(url);
		const data = await res.json();
		setRestaurant(data.elements);
	};

	useEffect(() => {
		getRestaurant();
		// get restaurant data on mount
	}, []);

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
		if (image.title === 'Asian Food') {
			setShowAsian(true);
			console.log('asian');
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
