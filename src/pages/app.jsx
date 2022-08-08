import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './app.css'
import Home from './home';
import BoxesPage from './boxesPage';
import LoginPage from './loginPage';
import Bar from './bar';

function App() {
  
    return (
      <Router>
          <header>
            <h1>Logo</h1>
              <label htmlFor="check">
                <span className="material-symbols-outlined">menu_open</span>
              </label>
              <input type="checkbox" id="check"/>
              <ul>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/home'>Calculator</Link></li>
                <li><Link to='/bar'>Barra</Link></li>
              </ul>
          </header>
          <Routes>
              <Route path="/" element={<LoginPage />}/>

              <Route path="/home"  element={<Home />}/>

              <Route path="/boxes" element={<BoxesPage />}/>

              <Route path="/bar" element={<Bar />}/>

          </Routes>
      </Router>
    )
  }

export default App