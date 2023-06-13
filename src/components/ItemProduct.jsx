// // Opción 1: Importar componente a componente
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// Opción 2: Destructurar el objeto que me devuelve el import

import { Card, Button } from "react-bootstrap";
import { ItemCount } from "./ItemCount.jsx";

export const ItemProduct = ({ product: { id, title, description, image, rating, category } }) => {
    return (
        <Card className="col-4">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>#{id}</Card.Title><Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {category.name}
                </Card.Text>

                {/* <ItemCount stock={rating.count}/> */}
                <Button variant="primary">Agregar a mi carrito</Button>
            </Card.Body>
        </Card>
    );
};
