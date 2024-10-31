import photo from '../assets/image-12.png'
import star from '../assets/Star1.png'

function Card(){
    return(
        <div className="card-container">
            <span className='img-label'>SOLD OUT</span>
            <img className='card--img' src={photo} />
            <div className="card--review">
                <img src={star} alt="" />
                <span className='stars-note'>5.0</span>
                <span>(6)</span>
                <span>.</span>
                <span>USA</span>
            </div>
            <p className="card--subtitle">Life lessons with Katie Zaferes</p>
            <p className="card--price"><span className='price-value'>From $136</span> / person</p>
        </div>
    )
}

export default Card;