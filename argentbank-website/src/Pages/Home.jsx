import '../style/home.css';
import FeaturesItems from '../components/featuresItems/FeaturesItems';
import dataFeatures from '../data/features.json';

function Home() {
    return (
        <main className='home-main'>
            <section className='hero'>
                <img src={dataFeatures[0].heroSrc} alt="Bank tree hero" />
                <article>
                    <h2>Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </article>
            </section>
            <section className='features-container'>
                {dataFeatures.map((features) => (
                        <FeaturesItems 
                            key={features.alt}
                            src={features.src} 
                            title={features.title} 
                            text={features.text} 
                            alt={features.alt}/>
                    ))
                }
            </section>
        </main>
    )
}

export default Home;