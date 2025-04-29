
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import RecipeDetails from './pages/recipe details/RecipeDetails';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserProvider from './context/UserContext';

function App() {
  return (
   <UserProvider>
      <BrowserRouter >
        <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<RecipeDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserProvider> 
  );
}

export default App;
