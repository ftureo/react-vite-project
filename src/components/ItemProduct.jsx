// // Opción 1: Importar componente a componente
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// Opción 2: Destructurar el objeto que me devuelve el import

import { Card, Button } from "react-bootstrap";
import { ItemCount } from "./ItemCount.jsx";

// export const ItemProduct = ( {id, description, price, image, title, category} ) => {
//     console.log({id})

// Primero desestructuro el nombre de la prop que en este caso es "product" ✔️
// Luego, asigno con dos puntos y entre llaves a aquellos valores que quiero desestructurar de la prop llamada "product"✔️

export const ItemProduct = ({ product: { id, title, description, image, rating } }) => {
    // console.log({ product }); // ✔️
    // const { id, description } = product ✔️

    // console.log({ condition }) // ✔️
    // const { enable, isAvailable, theme, title } = condition // ✔️
    // console.log({ enable, isAvailable, theme, title}) // ✔️

    //     // product.id ❗
    //     // product.title ❗
    //     // ...
    //     //props.product.id ❗

    // console.log({ id })
    // console.log({ title })

    // console.log({ isAvailable })
    // console.log({ theme })

    return (
        <Card className="col-4">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>#{id}</Card.Title><Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <ItemCount stock={rating.count}/>
                <Button variant="primary">Agregar a mi carrito</Button>
            </Card.Body>
        </Card>
    );
};
