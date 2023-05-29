import { IconCart } from "./IconCart.jsx"

export const Footer = (props) => {

    console.log("props en Footer", props)

    return(
        <footer>
            <p>Este es el footer</p>
            <p>Link de Github</p>
            <p>Link de Linkedin</p>
            <IconCart />
        </footer>
    )
}