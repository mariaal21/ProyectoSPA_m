import { Fetch } from '../api/Fetch';

export const GetProductos = async (category) => {

    const { products } = await Fetch(category);

    const product = products.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        photo: item.thumbnail,
        price: item.price,
        rating: item.rating
    }));

  return product;

};