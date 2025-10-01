import './Card.css'

export const Card = ({ title, price, address, date, img }) => {
    return (
        <a href="/product.html" className="card">
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
        </a>
    )
}