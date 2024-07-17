import { Routes, Route , Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Header from './components/headerFooter/Header';
import Footer from './components/headerFooter/Footer';
import User from './Pages/User';
import Error from './Pages/Error';

import './App.css';

function App() {
  const userStatus = useSelector((store) => store.USER.userStatus.connected)
  return (
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path='/user' element={!userStatus.connected ? <User /> : <Navigate to="/sign-in" />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
