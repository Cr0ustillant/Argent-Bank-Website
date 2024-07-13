import {Link} from 'react-router-dom';
import '../style/error.css';

function Error() {
    return (
        <main className="main-error">
                <p>Error 404</p>
                <span>Page not found</span>
                <Link to="/"><span>Return to home page</span></Link>  
        </main>
    )
}

export default Error;