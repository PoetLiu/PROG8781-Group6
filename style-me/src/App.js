// Created by Peng Liu
// Modified by Riten Sunilbhai Patel(8938590)
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.compat.css';
import Home from './Home';
import DigitalFashion from './DigitalFashion';
import AR from './AR';
import Blog from './Blog';
import Demo from './Demo';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Contact from './Contact';
/* Riten Sunilbhai Patel(8938590) added Helmet for custom title */

function App() {
  return (
    <Router>
      <MyNavbar></MyNavbar>
      <main className='pt-5'>
        {/* Riten Sunilbhai Patel(8938590) because of fixed-top navbar, we need to add padding-top*/}

        {/*From react-router v6, Switch is replaced by Routes.*/}
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Helmet>
                  <title>
                    Style.me | A New Way to Experience Digital Fashion
                  </title>
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path='/digital-fashion'
            element={
              <>
                <Helmet>
                  <title>Digital Fashion | Style.me</title>
                </Helmet>
                <DigitalFashion />
              </>
            }
          />
          <Route
            path='/AR'
            element={
              <>
                <Helmet>
                  <title>AR solutions for Digital Fashion | Style.me</title>
                </Helmet>
                <AR />
              </>
            }
          />

          <Route
            path='/Blog'
            element={
              <>
                <Helmet>
                  <title>Blog - Fashion Technology | Style.me</title>
                </Helmet>
                <Blog />
              </>
            }
          />
          <Route
            path='/Demo'
            element={
              <>
                <Helmet>
                  <title>Blog - Fashion Technology | Style.me</title>
                </Helmet>
                <Demo />
              </>
            }
          />
          <Route
            path='/Contact'
            element={
              <>
                <Helmet>
                  <title>Contact | Style.me</title>
                </Helmet>
                <Contact />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
