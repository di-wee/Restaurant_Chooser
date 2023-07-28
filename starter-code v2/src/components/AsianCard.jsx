import React from 'react';
import {
	Box,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	CardMedia,
} from '@mui/material';

const AsianCard = () => {
	return (
		<Box width="250px">
			<Card>
				<CardMedia></CardMedia>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Asian Food?
					</Typography>
				</CardContent>
				<CardActions>
					<Button></Button>
					<Button></Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default AsianCard;
