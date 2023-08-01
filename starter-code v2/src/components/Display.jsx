import React, { useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import ImagesButton from './ImagesButton';
import { indigo } from '@mui/material/colors';
import Anything from './Anything';

const Display = () => {
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
		justifyContent: 'center',
		alignItems: 'center',
	};
	const [showAnything, setShowAnything] = useState(false);
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
			{showAnything ? <Anything></Anything> : <ImagesButton></ImagesButton>}

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
							id="filled-basic"
							label="Where is your location?"
							variant="filled"
							sx={{ margin: '0.5rem', width: '100%' }}
						/>
						<Button sx={{ width: '20%', height: '50%' }} variant="contained">
							Submit
						</Button>
					</Box>
				)}
			</div>
		</div>
	);
};

export default Display;
