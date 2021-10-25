import React,  { useContext } from 'react';
import './styles.scss';

import AppContext from '@context/AppContext';

import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const{ addToCart } = useContext(AppContext);

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure>
					<img src={addToCartIcon} alt="" onClick={addToCart(product)}/>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
