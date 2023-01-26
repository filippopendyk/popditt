import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="flex flex-col p-4">
          <div className="flex">
            <img className="h-14 w-14" src="/assets/images/logo.png" alt='cipa'/>
            <h1 className='text-4xl ml-2 mt-1'>popditt</h1>
          </div>
          <form>
            <SearchBar/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
