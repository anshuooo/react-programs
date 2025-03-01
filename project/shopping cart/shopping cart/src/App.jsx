import './App.css';

import Layout from './components/Layout.jsx';

import home from './pages/Home';
import detail from './pages/Detail.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path= '/' element= {<Layout />}> 
      <Route index elemnet={<home />} />
      <Routes path='/:slug' element={<Detail />} /> 
       </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App;
