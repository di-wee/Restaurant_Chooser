import {
	Route,
	Routes,
	Navigate,
	BrowserRouter,
	Link,
} from 'react-router-dom/';
import Main from './pages/Main';
import Shortlist from './pages/Shortlist';
import NavBar from './components/NavBar';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import '@fontsource/roboto-condensed';

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
	return (
		<BrowserRouter>
			<ThemeProvider theme={darkerTheme}>
				<header>
					<NavBar></NavBar>
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Main></Main>}></Route>
						<Route path="shortlist" element={<Shortlist></Shortlist>}></Route>
					</Routes>
				</main>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
