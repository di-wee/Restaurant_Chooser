import React from 'react';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';

const NavBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent">
				<Toolbar>
					<IconButton>
						<MenuBookIcon></MenuBookIcon>
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						RESTAURANT CHOOSER
					</Typography>
					<Button color="inherit" endIcon={<StarIcon></StarIcon>}>
						SHORTLIST
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
