// Imagen, Precio, Nombre, Descripción

// export const ItemProduct = ( {id, description, price, image, title, category} ) => {
//     console.log({id})

// Primero desestructuro el nombre de la prop que en este caso es "product" ✔️
// Luego, asigno con dos puntos y entre llaves a aquellos valores que quiero desestructurar de la prop llamada "product"✔️

export const ItemProduct = ({ product: { id, title }, condition: { isAvailable, theme} }) => {
    // console.log({ product }); // ✔️
    // const { id, description } = product ✔️

    // console.log({ condition }) // ✔️
    // const { enable, isAvailable, theme, title } = condition // ✔️
    // console.log({ enable, isAvailable, theme, title}) // ✔️

    //     // product.id ❗
    //     // product.title ❗
    //     // ...
    //     //props.product.id ❗

    console.log({ id })
    console.log({ title })

    console.log({ isAvailable })
    console.log({ theme })

    return <h2>id</h2>;
};
