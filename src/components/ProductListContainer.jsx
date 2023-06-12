import { useEffect, useState } from "react";
import { getData } from "../utils/functions.js";
import { ProductList } from "./ProductList.jsx";
import Spinner from "react-bootstrap/Spinner";
import { API_PRACTICE } from "../utils/constants.js";

// Esto me trae solo lo que necesito de la librería
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// Esto me trae la librería completa
// import { Button, Card, Layout, Link, Nav } from "react-bootstrap";

// Estructura de un state en React es
// const [value, setterFunction] = useState(initialValue)
// initialValue es el valor inicial que va a tener el state y puede ser de tipo: string, number, boolean, array, object, etc.

// Acá vamos a hacer un pedido asincrónico, lo vamos a guardar en un estado y vamos a pasarle ese estado por props a la lista de productos

const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    const URL = API_PRACTICE.FAKESTOREAPI_PRODUCTS;

    // Acá también podríamos escribir la lógica de getData

    const fetchData = async () => {
        try {
            const data = await getData(URL);
            setProducts(data);
        } catch (error) {
            throw new Error(error);
        }
    };

    //  Cuando el componente se monta
    //  Cuando se actualiza
    // useEffect(setup, dependencies?)

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main>
            <h1>
                Aguante la comisión 38i que está aprendiendo React con
                componentes
            </h1>
            {products.length === 0 ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <ProductList products={products} />
            )}
        </main>
    );
};

export default ProductListContainer;
