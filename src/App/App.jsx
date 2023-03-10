import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

//components
import SearchBar from '../components/SearchBar/SearchBar';
import TopCategories from "../features/topCategories/TopCategories"; 

// pages
import Home from "../pages/Home";
import Feed from "../pages/Feed";

function App() {
  const [navVisible, showNavbar] = useState(false);


  return (
    <BrowserRouter>
      <div className="App flex">
        <header className="flex flex-col">
          <nav className="flex flex-col p-4">
            <div className="flex">
              <img className="h-14 w-14" src="/assets/images/logo.png" alt='cipa'/>
              <h1 className='text-4xl ml-2 mt-1 font-bold'> popditt</h1>
            </div>
              <SearchBar/>
            <div className='navbar-main flex flex-col px-4'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="all">All</NavLink>
            </div>
          </nav>
          <hr></hr>
          <TopCategories/>
        </header>
        <main className='bg-gray-theme'>
          <Routes>
              <Route index element={<Home />} />
              <Route path=':subreddit' element={<Feed/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
