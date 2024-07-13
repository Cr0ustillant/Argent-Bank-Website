import {Link} from 'react-router-dom';
import LogoSrc from '../../data/logo.json';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSignOut } from "../../redux/reducers/reducer"
import './HeaderFooter.css';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userStatus = useSelector((store) => store.USER.userStatus);
    const userData = useSelector((store) => store.USER.userData);

  const handleSignOut = () => {
    sessionStorage.getItem("token")
    sessionStorage.removeItem("token")
    localStorage.removeItem("token");
    dispatch(userSignOut());
    navigate("/");
  };
    return (
        <header>
            <Link to="/"><img src={LogoSrc[0].logo} alt="Logo" /></Link>
                
            <nav>
                <ul>
                    {!userStatus.connected && (
                        <li className="signIn">
                            <i className='fa fa-user-circle' />
                            <Link to='/sign-in'><p>Sign In</p></Link>
                        </li>
                    )}
                    {userStatus.connected && (
                    <Link to='/' onClick={handleSignOut} className="signOut">
                        <i className='fa fa-user-circle' />
                        {userData.userName}
                        {console.log(userData.userName,"userName :")}
                        <i className="fa fa-sign-out"></i>
                        <p>Sign Out</p>
                    </Link>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;