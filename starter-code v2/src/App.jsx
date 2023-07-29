import React, { useState } from 'react';
import Display from './components/Display';
import List from './components/List';
import RestaurantContext from './RestaurantContext';

function App() {
	const [restaurant, setRestaurant] = useState([]);
	const [showList, setShowList] = useState(false);
	return (
		<div>
			<RestaurantContext.Provider
				value={{ restaurant, setRestaurant, showList, setShowList }}
			>
				<Display></Display>
				{showList && <List></List>}
			</RestaurantContext.Provider>
		</div>
	);
}

export default App;
