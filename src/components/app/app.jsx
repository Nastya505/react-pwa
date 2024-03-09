import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import CounterPage from '../../pages/CounterPage';
import Layout from '../../layout';
import UsersPage from '../../pages/UsersPage';
import CardPage from '../../pages/CardPage';
function App() {
  return (
   <div className="app">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
