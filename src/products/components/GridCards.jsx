import { useFetchProducts } from "../hooks/useFetchProducts";
import { Cards } from "./Cards";

export const GridCards = ({ category }) => {

    const { products } = useFetchProducts(category);

    

    return (

        <section className="Grid">

            {
                products.map(product => (
                    <Cards {...product} key={product.id} />
                ))

            };

          


        </section>

    );

};