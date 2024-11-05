import React, { useState } from 'react';
import { GridGallery } from "./GridGallery";
import { SearchForm } from "./SearchForm";
import { conection } from '../utils/pexelsApi';

export const Gallery = () => {
    const [galleries, setGalleries] = useState([]);

    const handleSearchSubmit = async (searchText) => {
        try {
            const page = 1;      
            const perPage = 5;
            const result = await conection(searchText, page, perPage);
            setGalleries((prevGalleries) => {
                const existingGallery = prevGalleries.find(gallery => gallery.category === searchText);
                return existingGallery 
                    ? prevGalleries 
                    : [...prevGalleries, { category: searchText, photos: result.photos }];
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>Buscador de imágenes Pexels</h1>
            {/* Componente formulario */}
            <SearchForm onSearchSubmit={handleSearchSubmit} />
            {/* Componente grid gallery */}
            {galleries.map(gallery => (
                <GridGallery key={gallery.category} category={gallery.category} photos={gallery.photos} />
            ))}
        </>
    );
};