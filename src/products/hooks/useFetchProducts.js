import { useEffect, useState } from "react";
import { GetProductos } from "../helpers/GetProductos";

export const useFetchProducts = (category) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {

        const prods = await GetProductos(category);

        setProducts(prods);

    };

    useEffect(() => {

        fetchProducts();

    }, []);



    return{
        products
    };

};