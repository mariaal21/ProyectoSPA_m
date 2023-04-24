import { Route, Routes, Navigate } from 'react-router-dom';
import { SearchPage, SkinCarePage, FragancesPage, HomePage, ProductsPage } from '../products/pages';
import { LoginPage } from '../auth/pages/LoginPage';


export const ProductsRouters = () => {


    return (

        <Routes>

            <Route path='login' element={<LoginPage />} />
            <Route path='products' element={<ProductsPage />} />
            <Route path='fragances' element={<FragancesPage />} />
            <Route path='skincare' element={<SkinCarePage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='login' element={<HomePage />} />

            <Route path='/*' element={<Navigate to={'products'} />} />

        </Routes>

    );

};