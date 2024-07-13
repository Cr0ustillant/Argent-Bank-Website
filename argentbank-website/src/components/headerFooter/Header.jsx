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
            <Link to="/"><img src={LogoSrc[0].logo} alt="ArgentBank" /></Link>
                
            <nav>
                <ul>
                    {!userStatus.connected && (
                        <li className="signIn">
                            <Link to='/sign-in'>
                                <span>
                                    <i className='fa fa-user-circle' />
                                    <p>Sign In</p>
                                </span>
                            </Link>
                        </li>
                    )}
                    {userStatus.connected && (
                        <li className="signOut">
                            <Link to="/user">
                                <span>
                                    <i className='fa fa-user-circle'></i>
                                    {userData.userName}
                                </span> 
                            </Link>
                            <Link to="/" onClick={handleSignOut} >
                                <span>
                                    <i className="fa fa-sign-out"></i>
                                    <p>Sign Out</p>
                                </span>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;