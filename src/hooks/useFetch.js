import { useState, useEffect } from "react";

export const useFetch = (query, page = 1, per_page = 5) => {

    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async () => {
        try {
            const url = `${import.meta.env.VITE_URI_BASE}/search?query=${query}&page=${page}&per_page=${per_page}`
            const resp = await fetch(url, {
                headers: { 
                    Authorization: `${import.meta.env.VITE_API_KEY}`
                }
            });
            if (!resp.ok) throw ("Error en la peticion");
            return resp.json();
        } catch (error) {
            console.error("Error al conectar con la API:", error);
            throw error;
        }
    };

    const updatePhotos = async () => {
        const { photos: rawPhotos } = await fetchPhotos();
        const formattedPhotos = rawPhotos.map((photo) => (
            {
                id: photo.id,
                photographer: photo.photographer,
                photographer_url: photo.photographer_url,
                alt: photo.alt,
                src: photo.src.medium
            }
        ));
        //console.log(photos);
        setPhotos(formattedPhotos);
    };

    useEffect(() => {
        if (query) updatePhotos();
    }, []);

    return { photos };
};