import SearchBar from './components/SearchBar/SearchBar';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// pages
import Home from './pages/Home';
import All from './pages/All';
import Random from './pages/Random';
import Feed from './pages/Feed';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex">
        <header className="flex">
          <nav className="flex flex-col p-4">
            <div className="flex">
              <img className="h-14 w-14" src="/assets/images/logo.png" alt='cipa'/>
              <h1 className='text-4xl ml-2 mt-1'> popditt</h1>
            </div>
            <form>
              <SearchBar/>
            </form>
            <div className='flex flex-col'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="all">All</NavLink>
              <NavLink to="random">Random</NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
              <Route index element={<Feed topic/>} />
              <Route path='all' element={<Feed/>} />
              <Route path='random' element={<Feed />} />
              <Route path=':feedTopic' element={<Feed/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
