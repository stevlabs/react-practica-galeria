import React, { useState } from 'react';

export const SearchForm = ({ onSearchSubmit }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchClick = (ev) => {
        ev.preventDefault(); 
        if (searchText.trim()) {
            onSearchSubmit(searchText.trim());
            setSearchText('');
        }
    };

    const handleInputChange = (ev) => {
        setSearchText(ev.target.value); 
    };


    return (
        <>
            <form onSubmit = {handleSearchClick} id = {"searchForm"}>
                <input 
                    type = "text" 
                    placeholder = "Buscar imagenes"
                    value = {searchText}
                    onChange={handleInputChange} 
                />
                <input 
                    type = "submit" 
                    value = "Buscar"
                />
            </form>
        </>
    );
};
