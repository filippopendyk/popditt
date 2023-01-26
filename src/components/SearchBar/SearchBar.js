import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const SearchBar = () => {
    const [value, setValue] = useState("");


    return (
        <div className="my-3 rounded-3xl p-2 border-solid border border-gray-theme">
            <input type="text" className="pl-2 outline-none" name="search" placeholder="Search"></input>
            <button className='mx-2' type='submit'>
            <IconContext.Provider value={{color: "#C2C2C2", size: "1.1em"}}>
                <FiSearch/>
            </IconContext.Provider>
            </button>
        </div>
    );
}

export default SearchBar;