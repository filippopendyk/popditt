import SearchBar from './components/SearchBar/SearchBar';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

// pages
import Home from './pages/Home';
import All from './pages/All';
import Random from './pages/Random';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex">
        <nav className="flex">
          <header className="flex flex-col p-4">
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
          </header>
        </nav>
        <main>
          <Routes>
              <Route index element={<Home />} />
              <Route path='all' element={<All />} />
              <Route path='random' element={<Random />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
