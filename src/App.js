import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";
import Inicio from "./pages/inicio";
import Header from "./components/Header";

function App() {

  const location = useLocation();
  const routesWithHeader = ['/details', '/products'];
  const showHeader = routesWithHeader.some(route => location.pathname.startsWith(route));
  return (
    <div className="App">
      {showHeader && <Header />}
        <Routes>
          <Route path='/products' element={<ProductList />}/>
          <Route path='/details/:id' element={<ProductDetails />}/>
          <Route path='/' element={<Inicio />}/>
        </Routes>
    </div>
  );
}

export default App;
