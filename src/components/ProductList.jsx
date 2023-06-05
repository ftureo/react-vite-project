// Lista que muestra todos los ItemProduct que existen 

import { ItemProduct } from "./ItemProduct.jsx"

// export const ProductList = (props) => {
//     console.log("las props en productList", props.products)

export const ProductList = (props) => {
    const { products } = props
// export const ProductList = ( { products } ) => {
//     console.log("las props en productList", products);
    return (
        <>
            {/* <ItemProduct /> */}
            { products.map((product, index) => {
                // const { id, category, description, image, price, title } = product
                return(
                    // <ItemProduct key={index} id={id} category={category} description={description} image={image} price={price} title={title}/>
                        <ItemProduct key={index} product={product}/>
                    )
            }) }
        </>
    );
};


// const object = {
//      key1: "value1",
//      key2: "value2",
// }

// dot notation -> object.key1 y object.key2
// destructuring invocando a la variable -> const { key1, key2, key3 } = object 
// destructuring directo ({ key1, key2 })

