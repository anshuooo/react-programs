import React from 'react'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Router>
        <Routes>
          <Route path='/' element= {<h1> Home </h1>}  />
        </Routes>
      </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
