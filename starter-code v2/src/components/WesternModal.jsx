import React from 'react';
import {
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	Box,
	ButtonBase,
} from '@mui/material';
import './ImageButton.css';

const WesternModal = (props) => {
	const { setShowWestern, showWestern } = props;
	const images = [
		{
			url: '../../images/BurgersAndFries.png',
			title: 'Burgers & Fries',
			width: '25%',
		},
		{
			url: '../../images/mexican.png',
			title: 'Mexican Food',
			width: '25%',
		},
		{
			url: '../../images/Italian.png',
			title: 'Pasta & Pizza',
			width: '25%',
		},
		{
			url: '../../images/steak.png',
			title: 'Steak house',
			width: '25%',
		},
		{
			url: '../../images/cafe.png',
			title: 'Cafe Food',
			width: '25%',
		},
		{
			url: '../../images/Fish&Chips.png',
			title: 'Fish & Chips',
			width: '25%',
		},
	];

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
