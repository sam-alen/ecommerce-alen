import './App.css';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import HotOffers from './components/sections/HotOffers';
import Categories from './components/sections/Categories';
import NewReleases from './components/sections/NewReleases';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/sections/ItemDetailContainer';
import { ProductCartProvider } from './context/ProductCartProvider';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <ProductCartProvider>
        <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<><ItemList/><Hero/></>}/>
            <Route path='/details/:id' element={<ItemDetailContainer/>}/>
            <Route path="/hot-offers" element={<HotOffers />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/new-releases' element={<NewReleases />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </ProductCartProvider>
    </BrowserRouter>
  )
}

export default App;
