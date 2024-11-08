import './GridGallery.css';
import { useFetch } from '../../hooks/useFetch';
import { ImageCard } from '../image_card/ImageCard';

export const GridGallery = ({ category }) => {

    const { photos: dataFetch } = useFetch(category);
    console.log(dataFetch);
    return (
        <section>
            <h2 className='gallery-title'>{category}</h2>
            <div className='grid-gallery'>
                {
                    dataFetch.map((photo) => (
                        <ImageCard key={photo.id} {...photo} />
                    ))
                }
            </div>
        </section>
    );
};
