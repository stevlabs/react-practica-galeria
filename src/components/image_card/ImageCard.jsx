export const ImageCard = ({id, photographer, photographer_url, alt, src}) => {
    return (
        <article>
            <div className="image-card">
                <h3>{photographer}</h3>
                <a href={photographer_url} target="_blank">{photographer_url}</a>
                <div className="image-container">
                    <img src={src} alt={alt} /> 
                </div>
            </div>
        </article>        
    )
}
