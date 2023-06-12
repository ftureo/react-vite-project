import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="d-flex justify-content-evenly">
            <p>Este es el footer</p>
            <p>Link de Github</p>
            <Link to="https://www.linkedin.com/in/fabian-esteban-tureo/" target="_blank">Perfil de Fabi</Link>
        </footer>
    );
}