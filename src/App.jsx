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
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}

const Navbar = () => {
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
};

const ListItem = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredItem(index);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  return (
    <ul>
      {[1, 2, 3].map((item, index) => (
        <li
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
          style={{
            boxShadow:
              index === hoveredItem
                ? 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
                : '',
          }}
        >
          Item {item}
        </li>
      ))}
    </ul>
  );
};

export default App;
