import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Header from './components/headerFooter/Header';
import Footer from './components/headerFooter/Footer';
import User from './Pages/User';
import Error from './Pages/Error';
import { Provider } from "react-redux";
import store from './redux/store';

import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
