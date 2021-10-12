import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import Axios from 'axios';

import './styles.scss';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(async () => {
       const productResponse = await Axios(API_URL);
       setProducts(productResponse.data);
    }, [])

	return (
		<section className="main-container">
			<div className="ProductList">
                {
                    products.map(product => <ProductItem /> )
                }
			</div>
		</section>
	);
}

export default ProductList;
