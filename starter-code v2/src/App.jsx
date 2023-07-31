import React, { useState } from 'react';
import Display from './components/Display';
import List from './components/List';
import RestaurantContext from './RestaurantContext';
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import '@fontsource/roboto-condensed';

//creating dark theme
const darkerTheme = createTheme({
	palette: {
		primary: grey,
	},
	typography: {
		fontFamily: 'Roboto Condensed',
	},
});

function App() {
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
					<Display></Display>
					{showList && <List></List>}
				</RestaurantContext.Provider>
			</div>
		</ThemeProvider>
	);
}

export default App;
