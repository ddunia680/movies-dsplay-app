import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './header/header';
import Section1 from './Section1/section1';
import Section2 from './section2/section2';
import Footer from './Footer/footer';

const home = (
  <div>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
)

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Header/> }>
          <Route path='home' element={ home }/>
          <Route path='/movie' element={<h1 className='pt-40'>Welcome to this side</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
 