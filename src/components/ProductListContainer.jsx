import { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount.jsx";
import { getData } from "../utils/functions.js";
import { ProductList } from "./ProductList.jsx";

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
    const URL_FAKESTOREAPI_PRODUCTS = "https://fakestoreapi.com/products";

    // Acá también podríamos escribir la lógica de getData

    const fetchData = async () => {
        try {
            const data = await getData(URL_FAKESTOREAPI_PRODUCTS);
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
            <ItemCount stock={10} />
            {products.length === 0 ? (
                <h1>Loading ...</h1>
            ) : (
                <ProductList products={products} />
            )}
        </main>
    );
};

export default ProductListContainer;
