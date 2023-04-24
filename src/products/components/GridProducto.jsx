import { fetchDataCategory } from "../hooks/useFetchProducts";
import { Cards } from "./Cards";

export const GridProducts = ({ title}) => {


    const {
        id,
        title,
        photo,
        price
      } = producto;


    const { products } = fetchDataCategory(title);

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