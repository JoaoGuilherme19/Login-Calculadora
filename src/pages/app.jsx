import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './app.css'
import Home from './home';
import BoxesPage from './boxesPage';
import LoginPage from './loginPage';

function App() {
  
    return (
      <BrowserRouter>
          <header>
            <h1>Logo</h1>
              <label htmlFor="check">
                <span className="material-symbols-outlined">menu_open</span>
              </label>
              <input type="checkbox" id="check"/>
              <ul>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/home'>Calculator</Link></li>
              </ul>
          </header>
          <Routes>
              <Route path="/" element={<LoginPage />}/>
              <Route path="/home"  element={<Home />}/>
              <Route path="/boxes" element={<BoxesPage />}/>
          </Routes>
      </BrowserRouter>
    )
  }

export default App