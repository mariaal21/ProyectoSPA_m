import { Link } from 'react-router-dom';

export const NavBar = () => {


    return (

        <nav className='flex'>
            <ul className='nav-menu'>
                <div className='nav-li'>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/fragances'>Fragancias</Link></li>
                    <li><Link to='/skincare'>SkinCare</Link></li>
                    <li><Link to='/search'>Buscar</Link></li>
                </div>
                <div className='nav-li'>
                    <li><Link to='/login'>Login</Link></li>
                </div>

            </ul >

        </nav>

    );

};