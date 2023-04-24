import { fetchDataCategory } from "../api/Fetch";

export const fetchDataCategory = async (data) => {

    const data = {
        type: 'category',
        category
    };

    const { products } = await fetchDataCategory(data);

    const productsCat = products.map(prod => ({
        id: prod.id,
        title: prod.title,
        description: prod.description,
        price: prod.price,
        discount: prod.discountPercentage,
        src: prod.images,
        alt: `Imagen de ${prod.title}`
    }));

    return productsCat;

};