import './SearchForm.css'
import React, { useEffect, useState } from 'react';

export const SearchForm = ({ onSearchSubmit }) => {
    const [searchText, setSearchText] = useState('');

    // Funcion para manejar el evento click en buscar
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        const trimmedText = searchText.trim(); 
        console.log(trimmedText)
        if (trimmedText) {
            onSearchSubmit(trimmedText);
            setSearchText('');
        }
    };

    // Actualizar el estado con el valor del input
    const handleInputChange = (ev) => {
        setSearchText(ev.target.value); 
    };

    return (
        <>
            <form id="searchForm" onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    placeholder="Buscar imágenes" 
                    value={searchText} 
                    onChange={handleInputChange}
                />
                <input type="submit" value="Buscar"/>
            </form>
        </>
    );
};
