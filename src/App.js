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
          </Routes>
        </div>
      </ProductCartProvider>
    </BrowserRouter>
  )
}

export default App;
