import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/headerFooter/Header';
import Footer from './components/headerFooter/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
