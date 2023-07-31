import React, { useState } from 'react';
import Display from './components/Display';
import List from './components/List';
import RestaurantContext from './RestaurantContext';
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import '@fontsource/roboto-condensed';
import { Route, Routes, Navigate } from 'react-router-dom/';

//creating theme for MUI
const darkerTheme = createTheme({
	palette: {
		primary: {
			main: grey[50],
		},
	},
	typography: {
		fontFamily: 'Roboto Condensed',
	},
});
const backgroundDesign = {
	margin: '4rem 6rem 1rem 6rem',
	height: '100%',
	padding: '2rem',
	backgroundColor: 'rgba(255,255,255, 0.7)',
	borderRadius: '2%',
};

function App() {
	//managing states for usage
	const [restaurant, setRestaurant] = useState([]);
	const [cafe, setCafe] = useState([]);
	const [showList, setShowList] = useState(false);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	return (
		<ThemeProvider theme={darkerTheme}>
			<div>
				<RestaurantContext.Provider
					value={{
						restaurant,
						setRestaurant,
						showList,
						setShowList,
						filteredRestaurant,
						setFilteredRestaurant,
						cafe,
						setCafe,
					}}
				>
					<NavBar></NavBar>

					<Box sx={backgroundDesign}>
						{showList ? <List></List> : <Display></Display>}
					</Box>
				</RestaurantContext.Provider>
			</div>
		</ThemeProvider>
	);
}

export default App;
