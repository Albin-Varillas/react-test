import "./ProductCard.css"
import { useState } from "react"

function ProductCard(props) {
    const [color, setColor] = useState(null)

    return (
        <div className="product-card">
            <img src={props.image} alt="" height="200" />
            <h1>{props.name}</h1>
            <p>{props.brand}</p>
            <button
                style={color}
                onClick={() => setColor(color ? null : props.style)}
            >
                Köp
            </button>
        </div>
    )
}

export default ProductCard
