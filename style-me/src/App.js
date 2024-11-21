import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import DigitalFashion from './DigitalFashion';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNavbar></MyNavbar>
      <main className='container'>
        {/*From react-router v6, Switch is replaced by Routes.*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-fashion" element={<DigitalFashion />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
