import { Search } from "../components";
import { useState } from "react";
import { fetchDataSearch } from "../helpers/SearchProducts";
import { Cards } from "../components/Cards";

export const SearchPage = () => {

    const [products, setProducts] = useState([]);
  
    const [searchText, setSearchText] = useState('')
    
  
    const getText = async (findText) => {
  
      setSearchText(findText);
      const data = await fetchDataSearch(findText);
  
      setProducts(data);
    };
  
  
    return (
      <div>
  
        <Search getText={getText} />
  
        <section>
          {(products.length > 0) ?
  
            <>
              {(products.length == 1) ?
                <h3>Se ha encontrado</h3>
                :
                <h3>Se han encontrado {products.length}</h3>
              }
  
              {products.map(product =>
                <Cards key={product.id} {...product} />
              )}
            </>
  
            :
            
            <>
              {
                (searchText != '') ?
                  <h4>No hay resultados para tu búsqueda...</h4>
                  :
                  <p></p>
              }
            </>
  
          }
        </section>
  
      </div>
    )
  
  };