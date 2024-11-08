import './Gallery.css'
import { useEffect, useState } from 'react';
import { SearchForm } from "../searchForm/SearchForm";
import { GridGallery } from '../grid_gallery/GridGallery';

export const Gallery = () => {

    const [categories, setCategories] = useState([]);

    const handleAddCategory = (newCategory) => {
        const lowerCaseCategory = newCategory.toLowerCase();
        if (categories.map(category => category.toLowerCase()).includes(lowerCaseCategory)) return
        setCategories([...categories, newCategory]);
        //console.log(categories);
    };

    /* Mirar cambios en categorie */
    /*
    useEffect(() => {
        console.log("Categories actualizado:", categories);
    }, [categories]);
    */
    return (
        <>
            <h1>Buscador de imágenes Pexels</h1>
            {/* Componente formulario */}
            <SearchForm onSearchSubmit={handleAddCategory}/>
            {categories.map((category) => (
                <GridGallery key={category} category={category}/>
            ))}
        </>
    );
};