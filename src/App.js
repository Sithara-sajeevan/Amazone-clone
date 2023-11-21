
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Ca from './component/pages/Ca';
import Wishlist from './component/pages/Wishlist';

function App() {
  return (
    <div >
<Header/>

     <Routes>
     <Route path='/' element={ <Home/>}/>
        <Route path='/ca' element={<Ca/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
     </Routes>
<Footer/>
</div>
  )
}

export default App