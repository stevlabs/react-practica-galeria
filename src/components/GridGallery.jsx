import React from 'react'
import { ImageCard } from './ImageCard';

export const GridGallery = ({ category, photos }) => {
    return (
    <>
        <section>
            <h2>{category}</h2>
            <div>
                {photos.map((photo) => 
                    <ImageCard 
                        key = {photo.id}
                        author = {photo.photographer} 
                        author_url = {photo.photographer_url}
                        src = {photo.src.medium } 
                        url = {photo.url} 
                        alt = {photo.alt}
                    />
                )}
            </div>
        </section>
    </>
    );
};
