import React, { useState } from 'react';
import Display from './components/Display';
import List from './components/List';
import RestaurantContext from './RestaurantContext';

function App() {
	const [restaurant, setRestaurant] = useState([]);
	const [showList, setShowList] = useState(false);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	return (
		<div>
			<RestaurantContext.Provider
				value={{
					restaurant,
					setRestaurant,
					showList,
					setShowList,
					filteredRestaurant,
					setFilteredRestaurant,
				}}
			>
				<Display></Display>
				{showList && <List></List>}
			</RestaurantContext.Provider>
		</div>
	);
}

export default App;
