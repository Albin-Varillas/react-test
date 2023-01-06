import "./ColorPicker.css"
import { useState } from "react"

function ColorPicker() {
    const [color, setColor] = useState("#000000")

    return (
        <div className="ColorPicker">
            <div className="circel" style={{ backgroundColor: color }}></div>
            <input
                type="color"
                onChange={(event) => {
                    setColor(event.target.value)
                }}
            />
        </div>
    )
}

export default ColorPicker
