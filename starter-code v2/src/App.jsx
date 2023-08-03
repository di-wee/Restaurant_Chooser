import { Route, Routes, BrowserRouter } from 'react-router-dom/';
import Main from './pages/Main';
import Shortlist from './pages/Shortlist';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import '@fontsource/roboto-condensed';
import RestaurantContext from './RestaurantContext';

//main theme for app
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

function App() {
	//managing states for usage
	const [restaurant, setRestaurant] = useState([]);
	const [cafe, setCafe] = useState([]);
	const [showList, setShowList] = useState(false);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [shortlistedRestaurant, setShortlistedRestaurant] = useState([]);
	const [shallowCopy, setShallowCopy] = useState([]);
	const [query, setQuery] = useState('');

	return (
		<BrowserRouter>
			<ThemeProvider theme={darkerTheme}>
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
						shortlistedRestaurant,
						setShortlistedRestaurant,
						query,
						setQuery,
					}}
				>
					<header>
						<NavBar></NavBar>
					</header>
					<main>
						<Routes>
							<Route path="/" element={<Main></Main>}></Route>
							<Route path="shortlist" element={<Shortlist></Shortlist>}></Route>
						</Routes>
					</main>
				</RestaurantContext.Provider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
