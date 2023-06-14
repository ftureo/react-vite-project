import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <div>
            <h1>Pagina de Contacto</h1>
            <p>
                Somos una empresa que se dedica a la venta de productos de
                tecnología, ropa de hombre, ropa de mujer y joyería.
            </p>
            <h2>Página en Construcción</h2>
            <Link to="/">
                <Button>Volver a la página principal</Button>
            </Link>
        </div>
    );
};
