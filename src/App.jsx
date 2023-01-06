import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProductCard from "./components/ProductCard"
import { useState } from "react"

function App(props) {
    const icon = "; )"

    const data = [
        {
            image: "https://images.ctfassets.net/nproz1mx87a8/6X177DZZvao6LPqAbqti0I/32aae69c33d19fba5d758d42e08c1ae1/Samsung_S22_Ultra_Burgundy_Front_w_pen.png?&w=350&h=450&fm=webp",
            name: "Galaxy S22",
            brand: "Samsung",
        },
        {
            image: "https://images.ctfassets.net/nproz1mx87a8/3LKPxNSfKIWpQWKajNsjP4/25ad6f3296e1dfc104d25eb08c22fcb8/Apple-iPhone-12-Lila-Front_Storefront-FMC-_-Detalj.png?&w=350&h=450&fm=webp",
            name: "iPhone 12",
            brand: "Apple",
        },
        {
            image: "https://images.ctfassets.net/nproz1mx87a8/Nh8O0nbfeplqvBDBHB1FY/36569c879158a78cb1e95fa1d77550e8/Xiaomi_12_Pro_Black_Front.png?&w=350&h=450&fm=webp",
            name: "12 Pro",
            brand: "Xiaomi",
        },
        {
            image: "https://images.ctfassets.net/nproz1mx87a8/1kE3m2ewlQIxj70WACuEeJ/2caf429167f5c0e330274dc55eb36585/Galaxy-z-flip3-black-folded-front-detail.png?&w=150&fm=webp",
            name: "Flip3",
            brand: "Samsung",
        },
        {
            image: "https://images.ctfassets.net/nproz1mx87a8/2lEn3ZSdfnD8SeCh2Rys2u/6070046d51fbcbda5eb40d897e44acb7/Samsung_Galaxy_Z_Fold4_Front_image.png?&w=150&fm=webp",
            name: "z Fold4",
            brand: "Samsung",
        },
        {
            image: "https://images.ctfassets.net/nproz1mx87a8/Nh8O0nbfeplqvBDBHB1FY/36569c879158a78cb1e95fa1d77550e8/Xiaomi_12_Pro_Black_Front.png?&w=150&fm=webp",
            name: "12 Pro",
            brand: "Xiaomi",
        },
        {
            image: "https://images.ctfassets.net/nproz1mx87a8/6idiRUXq4tUSlHjllwToft/9591fcd5812fa2564379276689ac3794/Xiaomi-12T-Pro-Blue-T2---front.png?&w=150&fm=webp",
            name: "12T Pro",
            brand: "Xiaomi",
        },
    ]

    return (
        <div className="App">
            {/* <Navbar title="Best navbar" /> */}
            <main>
                {data.map((element, index) => {
                    return (
                        <ProductCard
                            {...element}
                            key={index}
                            style={{ background: "green" }}
                        />
                    )
                })}
            </main>
            {/* <Footer icon={icon} /> */}
        </div>
    )
}

export default App
