import React, { useEffect, useState } from "react";
import Axios from "axios";

const useGetProducts = (apiUrl) => {
    const [ products, setProducts ] = useState([]);

    useEffect(async () => {
       const productResponse = await Axios(apiUrl);
       setProducts(productResponse.data);
    }, [])

    return products
}

export default useGetProducts
