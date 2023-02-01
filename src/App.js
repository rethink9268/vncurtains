import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.js';
import Error from './pages/Error.js';
import SharedLayout from './components/SharedLayout.js';
import { useDesignsContext } from './contexts/designs_context.js';
import Loading from './components/Loading.js'
import Products from './pages/Products/Products.js';
import Portfolio from './pages/Portfolio/Portfolio.js';
import Contact from './pages/Contact/Contact.js';
import SingleProduct from './pages/Products/SingleProduct.js'
import SinglePortfolio from './pages/Portfolio/SinglePortfolio.js'

function App() {
  const { designsLoading, designsError } = useDesignsContext()

  if (designsLoading) {
    return <Loading />
  }
  if (designsError) {
    return <Error />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:id' element={<SinglePortfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
