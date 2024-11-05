export const ImageCard = ({author, author_url, src, alt}) => {
    return (
        <>
            <article>
                <h3>{author}</h3>
                <a href={author_url} target="_blank">{author_url}</a>
                <img src={src} alt={alt} /> 
            </article>        
        </>
    )
}
