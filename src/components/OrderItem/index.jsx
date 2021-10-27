import React, { useContext } from 'react';
import './styles.scss';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const OrderItem = ({ item }) => {
	const { removeFromCart } = useContext(AppContext)
	
	return (
		<div className="OrderItem">
			<figure>
				<img src={item.images[0]} alt={item.title} />
			</figure>
			<p>{item.title}</p>
			<p>${item.price}</p>
			<img src={ close } alt="close" onClick={removeFromCart(item)} />
		</div>
	);
}

export default OrderItem;
