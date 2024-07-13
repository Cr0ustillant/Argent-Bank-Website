function FeaturesItems({src , title , text , alt}) {
    return (
        <figure>
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>{text}</p>
        </figure>
    )
}
export default FeaturesItems;