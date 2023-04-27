import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vid1 from './assets/videos/beach.mp4';
import Vid2 from './assets/videos/pexels.mp4';
import Vid3 from './assets/videos/sunset.mp4';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';

const App = () => {
  return (
    <div className="App">
      <div className="top" id="acasa">
        <Navbar />
        <div className="text-center">
          <h3 className="text">Baia Mare, Maramures</h3>
          <h1 className="text">O experiență de neuitat</h1>
        </div>
      </div>
      <div className="middle" id="acasa">
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
      <div className="pictures-field" id="imagini">
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
      <div className="video-field" id="videoclipuri">
        <div className="bckg-pic">
          <h3 className="videoclipuri-txt">Videoclipuri</h3>
          <div className="carousel-field">
            <UncontrolledCarousel />
            <UncontrolledCarousel />
          </div>
        </div>
      </div>
      <div className="contact-us" id="contact">
        <div className="bckg-pic">
          <h3 className="contact-txt">Contact</h3>
          <div className="detalii">
            <div className="detalii-txt">
              <div className="phone">
                <h4>Numar de telefon: 0123456789</h4>
              </div>
              <div className="email">
                <h4>Email: random.email@random.com</h4>
              </div>
              <div className="address">
                <h4>Address: Acasa la mine LOL</h4>
              </div>
            </div>
            <div className="gmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.431742256961!2d23.544965477108903!3d47.656608571194575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737dc49a4d7ed47%3A0xde77e7e9437d3540!2sVIVO*21%20Baia%20Mare!5e0!3m2!1sen!2suk!4v1682614641524!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-evenly">
        <a className="nav-link text-bg-dark" href="#acasa">
          Acasă
        </a>
        <a className="nav-link text-bg-dark" href="#imagini">
          Imagini
        </a>
        <a className="nav-link text-bg-dark" href="#videoclipuri">
          Videoclipuri
        </a>
        <a className="nav-link text-bg-dark" href="#contact">
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
