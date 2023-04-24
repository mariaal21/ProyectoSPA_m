import { NavBar } from './ui/NavBar';
import { ProductsRouters } from './routers/ProductsRouters';

function App() {

  return (

    <>

      <p className='tituloo flex bg-dark'>Práctica SPA</p>
  
    <NavBar />

    <main className="flex">

    <ProductsRouters />

    </main>

    <footer className="flex bg-dark">
      Footer
    </footer>

    </>

  );

};

export default App;