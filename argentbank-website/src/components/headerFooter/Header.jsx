import {Link} from 'react-router-dom';
import LogoSrc from '../../data/logo.json';
import './HeaderFooter.css';

function Header() {
    return (
        <header>
                <img src={LogoSrc[0].logo} alt="Logo" />
            <nav>
                <ul>
                    <Link>
                            <li><i className='fa fa-user-circle'></i> Sign in</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;