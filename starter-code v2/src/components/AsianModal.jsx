import React, { useContext } from 'react';
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

const AsianModal = (props) => {
	const restaurantContext = useContext(RestaurantContext);
	//to reset list without directly manipulating OG state; a shallow copy
	const { setFilteredRestaurant } = restaurantContext;
	const { setShowAsian, showAsian, restaurant, setShowList } = props;
	//filtering data according to button choice
	const filterRestaurant = (restcuisine) => {
		const filter = restaurant.filter(
			(place) => place.tags.cuisine === restcuisine && place.tags.name
		);
		setFilteredRestaurant(filter);
		console.log(restaurant);
	};

	const handleClick = (item) => {
		switch (item.cuisine) {
			case 'chinese':
				filterRestaurant(item.cuisine);
				break;
			case 'japanese':
				filterRestaurant(item.cuisine);
				break;
			case 'korean':
				filterRestaurant(item.cuisine);
				break;
			case 'thai':
				filterRestaurant(item.cuisine);
				break;
			case 'vietamese':
				filterRestaurant(item.cuisine);
				break;
			case 'indian':
				filterRestaurant(item.cuisine);
				break;
		}

		setShowAsian(false);
		setShowList(true);
	};

	const images = [
		{
			url: '../../images/chinese.png',
			title: 'Chinese Food',
			width: '25%',
			cuisine: 'chinese',
		},
		{
			url: '../../images/jap.png',
			title: 'Japanese Food',
			width: '25%',
			cuisine: 'japanese',
		},
		{
			url: '../../images/korean.png',
			title: 'Korean Food',
			width: '25%',
			cuisine: 'korean',
		},
		{
			url: '../../images/thai.png',
			title: 'Thai Food',
			width: '25%',
			cuisine: 'thai',
		},
		{
			url: '../../images/viet.png',
			title: 'Viet Food',
			width: '25%',
			cuisine: 'vietnamese',
		},
		{
			url: '../../images/indian.png',
			title: 'Indian Food',
			width: '25%',
			cuisine: 'indian',
		},
	];

	const handleClose = () => {
		setShowAsian(false);
	};

	return (
		<Dialog onClose={handleClose} open={showAsian}>
			<DialogTitle style={{ textAlign: 'center' }}>Asian Food</DialogTitle>
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
							<span className="imageBackdrop"></span>
							<span className="image">
								<Typography
									style={{
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
			</DialogContent>
		</Dialog>
	);
};

export default AsianModal;
