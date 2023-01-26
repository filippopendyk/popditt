import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newRoute = "/" + value;
        navigate(newRoute);
        setValue("");
    }

    return (
    
    <form onSubmit={handleSubmit}>
        <div className="my-3 rounded-3xl p-2 border-solid border border-gray-theme">
            <input type="text" className="pl-2 outline-none" name="search" placeholder="Search" value={value} onChange={handleChange}></input>
            <button className='mx-2' type='submit'>
            <IconContext.Provider value={{color: "#C2C2C2", size: "1.1em"}}>
                <FiSearch/>
            </IconContext.Provider>
            </button>
        </div>
    </form>

    );
}

export default SearchBar;