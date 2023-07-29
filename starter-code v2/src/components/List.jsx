import React, { useContext } from 'react';
import RestaurantComponent from './RestaurantComponent';
import RestaurantContext from '../RestaurantContext';

const List = () => {
	const restaurantContext = useContext(RestaurantContext);
	const { restaurant, setRestaurant } = restaurantContext;
	return (
		<div>
			<RestaurantComponent
				restaurant={restaurant}
				setRestaurant={setRestaurant}
			></RestaurantComponent>
		</div>
	);
};

export default List;
