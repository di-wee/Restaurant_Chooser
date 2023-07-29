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

const AsianModal = (props) => {
	const { setShowAsian, showAsian } = props;
	const images = [
		{
			url: '../../images/chinese.png',
			title: 'Chinese Food',
			width: '25%',
		},
		{
			url: '../../images/jap.png',
			title: 'Japanese Food',
			width: '25%',
		},
		{
			url: '../../images/korean.png',
			title: 'Korean Food',
			width: '25%',
		},
		{
			url: '../../images/thai.png',
			title: 'Thai Food',
			width: '25%',
		},
		{
			url: '../../images/viet.png',
			title: 'Viet Food',
			width: '25%',
		},
		{
			url: '../../images/indian.png',
			title: 'Indian Food',
			width: '25%',
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

export default AsianModal;
