import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Service/Services';
import RightSide from './components/SeoMarket/RightSide';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Services />} />
        <Route path='/pages' element={<RightSide />} />
          <Route path='/contact us' element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
