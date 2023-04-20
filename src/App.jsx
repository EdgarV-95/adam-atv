import { useState } from 'react';
import './App.css';
import './assets/top.css';
import './assets/middle.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <div class="container">
          <h3 class="text-center">Baia Mare, Maramures</h3>
          <h1 class="text-center-2">Quad experience</h1>
        </div>
      </div>
      <div className="middle">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-evenly">
          <a className="nav-link text-bg-dark " href="#">
            Home
          </a>
          <a className="nav-link text-bg-dark" href="#">
            About
          </a>
          <a className="nav-link text-bg-dark" href="#">
            Photos & Videos
          </a>
          <a className="nav-link text-bg-dark" href="#">
            Conctact
          </a>
        </div>
      </nav>
    </>
  );
}

export default App;
