import star from '../assets/Star1.png'

function Card({openSpots, imgUrl, starsNote, commentsCount, location, subtitle, price}){

    let badgeText;
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card-container">
            { badgeText && <span className='img-label'>{badgeText}</span>}
            <img className='card--img' src={imgUrl} />
            <div className="card--review">
                <img src={star} alt="" />
                <span className='stars-note'>{Number(starsNote).toFixed(1)}</span>
                <span>({commentsCount})</span>
                <span>•</span>
                <span>{location}</span>
            </div>
            <p className="card--subtitle">{subtitle}</p>
            <p className="card--price"><span className='price-value'>From ${price}</span> / person</p>
        </div>
    )
}

export default Card;