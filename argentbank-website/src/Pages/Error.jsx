import {Link} from 'react-router-dom';
import '../style/error.css';

function Error() {
    return (
        <main className="main-error">
            <div>
                <p>Erreur</p>
                <Link to="/"><span>Retourner à l'accueil</span></Link>  
            </div>
        </main>
    )
}

export default Error;