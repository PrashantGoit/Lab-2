export default function Card({ image, country, location, rating, price }) {
    return (
        <div className="card">
            <img src={image} alt={location} width="150px" />
            <h3 className="card-country">{country}</h3>
            <p className="card-location">{location}</p>
            {rating > 4.0 ? <p className="card-rating" style={{color: "green"}}>{rating} ★ </p> : <p className="card-rating" style={{color: "red"}}>{rating} ★ </p>}
            <p className="card-price">{price}</p>
        </div>
    );
}