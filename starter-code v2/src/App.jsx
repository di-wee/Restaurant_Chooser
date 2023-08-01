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
	//singapore's coordinates
	const LATITUDE = 1.3521;
	const LONGITUDE = 103.8198;
	const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="restaurant"](around:5000,${LATITUDE},${LONGITUDE});out;`;
	const getRestaurant = async () => {
		const res = await fetch(url);
		const data = await res.json();
		setRestaurant(data.elements);
	};

	useEffect(() => {
		getRestaurant();
		// get restaurant data on mount
	}, []);
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
						shallowCopy,
						setShallowCopy,
					}}
				>
					<header>
						<NavBar></NavBar>
					</header>
					<main>
						<Routes>
							<Route
								path="/"
								element={<Main getRestaurant={getRestaurant}></Main>}
							></Route>
							<Route
								path="shortlist"
								element={<Shortlist getRestaurant={getRestaurant}></Shortlist>}
							></Route>
						</Routes>
					</main>
				</RestaurantContext.Provider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
