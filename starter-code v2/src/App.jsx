import React, { useState } from 'react';
import Display from './components/Display';
import List from './components/List';
import RestaurantContext from './RestaurantContext';

function App() {
	const [restaurant, setRestaurant] = useState([]);
	return (
		<div>
			<RestaurantContext.Provider value={{ restaurant, setRestaurant }}>
				<Display></Display>
				<List></List>
			</RestaurantContext.Provider>
		</div>
	);
}

export default App;
