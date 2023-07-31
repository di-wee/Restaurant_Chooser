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
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Button startIcon={<MenuBookIcon></MenuBookIcon>} color="inherit">
						<Typography variant="h6" component="div">
							<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
								{' '}
								RESTAURANT CHOOSER
							</Link>
						</Typography>
					</Button>
					<Button color="inherit" endIcon={<StarIcon></StarIcon>}>
						<Link
							to="shortlist"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							SHORTLIST
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
