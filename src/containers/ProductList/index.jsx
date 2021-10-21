import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';

import './styles.scss';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(API_URL)

	return (
		<section className="main-container">
			<div className="ProductList">
                {
                    products.map(product => <ProductItem key={product.id} product={product}/> )
                }
			</div>
		</section>
	);
}

export default ProductList;
