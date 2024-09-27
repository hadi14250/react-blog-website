import { Link } from 'react-router-dom';
import useUser from './hooks/useUser';

const NavBar = () => {
    const { user } = useUser();
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            <div className='nav-right'>
                {
                    user 
                        ? <button>Log Out</button>
                        : <button>Log In</button>
                }
            </div>
            </ul>
        </nav>
    );
}

export default NavBar;