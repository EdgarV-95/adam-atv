import './App.css';
import './assets/css/top.css';
import './assets/css/middle.css';
import './assets/css/pics.css';
import './assets/css/video.css';
import './assets/css/contact.css';
import Vid1 from './assets/videos/beach.mp4';
import Vid2 from './assets/videos/pexels.mp4';
import Vid3 from './assets/videos/sunset.mp4';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';

const App = () => {
  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <div className="text-center">
          <h3 className="text">Baia Mare, Maramures</h3>
          <h1 className="text">O experiență de neuitat</h1>
        </div>
      </div>
      <div className="middle">
        <div class="mid-txt">
          <h3 className="informatie-txt">Informatie</h3>
          <h6 className="description">
            Compania noastră de închirieri ATV din Baia Mare, România,
            se mândrește cu o experiență de peste 20 de ani și este un
            nume de încredere în industrie. Echipa noastră de ghizi
            specializați și ATV-urile bine întreținute asigură o
            aventură sigură și captivantă pentru toate nivelurile de
            călăreți. Situate în munții Carpați impresionanți,
            tururile noastre oferă o întâlnire apropiată cu natura, de
            la traversarea traseelor accidentate la bucurarea de
            peisaje panoramice. Potrivite pentru familii, prieteni,
            călăreți singuri și echipe corporative, tururile noastre
            pot fi personalizate în funcție de preferințele și nevoile
            dvs. În calitate de manager de marketing al companiei
            noastre, vă invit să vă pregătiți, să vă porniți motoarele
            și să ne însoțiți pentru o aventură pe ATV-uri de neuitat
            în munții din România. Contactați-ne astăzi pentru a vă
            rezerva experiența captivantă off-road și pentru a crea
            amintiri de durată!
          </h6>
        </div>
      </div>
      <div className="pictures-field">
        <h3 className="fotografii-txt">Imagini</h3>
        <div className="pictures">
          <ul className="first-ul">
            <li className="firstLi"></li>
            <li>2</li>
          </ul>
          <ul className="second-ul">
            <li>3</li>
            <li>4</li>
          </ul>
          <ul className="third-ul">
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </div>
      <div className="video-field">
        <div className="bckg-pic">
          <h3 className="videoclipuri-txt">Videoclipuri</h3>
          <div className="carousel-field">
            <UncontrolledCarousel />
            <UncontrolledCarousel />
          </div>
        </div>
      </div>
      <div className="contact-us">
        <p>fasz</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-evenly">
        <a className="nav-link text-bg-dark" href="#">
          Acasă
        </a>
        <a className="nav-link text-bg-dark" href="#">
          Imagini
        </a>
        <a className="nav-link text-bg-dark" href="#">
          Videoclipuri
        </a>
        <a className="nav-link text-bg-dark" href="#">
          Conctact
        </a>
      </div>
    </nav>
  );
};

const UncontrolledCarousel = () => {
  const videos = [
    {
      src: Vid1,
      type: 'video/mp4',
      alt: 'First slide',
    },
    {
      src: Vid2,
      type: 'video/mp4',
      alt: 'Second slide',
    },
    {
      src: Vid3,
      type: 'video/mp4',
      alt: 'Third slide',
    },
  ];
  return (
    <Carousel slide={false}>
      {videos.map((vids, id) => {
        return (
          <Carousel.Item key={id}>
            <ReactPlayer
              url={vids.src}
              pip={true}
              controls={true}
              playing={true}
            />
            <Carousel.Caption>
              <h3>{vids.alt}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default App;
