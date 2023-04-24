
import { FetchSearch } from "../api/Fetch";

export const fetchDataSearch = async (search) => {

    const data = {
        type: 'search',
        search
    }

    const { products } = await FetchSearch(data);

    const productsCat = products.map(prod => ({
        id: prod.id,
        title: prod.title,
        category: prod.category,
        description: prod.description,
        price: prod.price,
        src: prod.images,
        alt: `Imagen de ${prod.title}`
    }));

    return productsCat;

};

