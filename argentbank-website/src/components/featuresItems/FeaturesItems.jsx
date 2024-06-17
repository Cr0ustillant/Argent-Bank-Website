function FeaturesItems({src , title , text , alt}) {
    return (
        <figure>
            <img src={src} alt={alt} />
            <h3>{title}</h3>
            <p>{text}</p>
        </figure>
    )
}
export default FeaturesItems;