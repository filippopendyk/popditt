import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

//components
import SearchBar from '../components/SearchBar/SearchBar';
import TopCategories from "../features/topCategories/TopCategories"; 

// pages
import Home from "../pages/Home";
import Feed from "../pages/Feed";

function App() {
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
            <div className='flex flex-col p-4'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="all">All</NavLink>
              <NavLink to="random">Random</NavLink>
            </div>
          </nav>
          <hr></hr>
          <TopCategories/>
        </header>
        <main>
          <Routes>
              <Route index element={<Home />} />
              <Route path=':feedTopic' element={<Feed/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
