import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './ImageButton.css';
import AsianModal from './AsianModal';
import WesternModal from './WesternModal';

const ImagesButton = (props) => {
	const { restaurant, setRestaurant } = props;
	//states for modals opening and closing
	const [showAsian, setShowAsian] = useState(false);
	const [showWestern, setShowWestern] = useState(false);

	const images = [
		{
			url: '../../images/asian.png',
			title: 'Asian Food',
			width: '25%',
		},
		{
			url: '../../images/western.png',
			title: 'Western Food',
			width: '25%',
		},
	];
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
						style={{
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

			{showAsian && (
				<AsianModal
					showAsian={showAsian}
					setShowAsian={setShowAsian}
					restaurant={restaurant}
					setRestaurant={setRestaurant}
				></AsianModal>
			)}
			{showWestern && (
				<WesternModal
					showWestern={showWestern}
					setShowWestern={setShowWestern}
					restaurant={restaurant}
					setRestaurant={setRestaurant}
				></WesternModal>
			)}
		</div>
	);
};

export default ImagesButton;
