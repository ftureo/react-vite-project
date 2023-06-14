import { useEffect, useState } from "react";
import { getData } from "../utils/functions.js";
import { ProductList } from "./ProductList.jsx";
import Spinner from "react-bootstrap/Spinner";
import { API_PRACTICE } from "../utils/constants.js";
import { useParams } from "react-router-dom";

const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    const URL = API_PRACTICE.FAKESTOREAPI_PRODUCTS;

    const { category } = useParams();

    const fetchData = async () => {
        try {
            const data = await getData(URL);
            if(category) {
                const filteredProducts = data.filter((product) => (product.category) === category.toLowerCase());
                setProducts(filteredProducts);
            } else {
                setProducts(data);
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

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
