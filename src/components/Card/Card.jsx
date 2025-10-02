import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ id, title, price, address, date, img }) => {
    return (
        <Link to={`/product/${id}`} className="card">
            <div className="card--img">
                <img src={img} alt={title} />
            </div>
            <h5 className="card--title">
                {title}
            </h5>
            <strong className="card--price">{price}</strong>
            <div className="card--desc">
                <span className="card--desc-box">
                    {address}
                </span>
                <span className="card--desc">
                    {date}
                </span>
            </div>
        </Link>
    )
}