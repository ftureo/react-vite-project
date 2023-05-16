// const NavBar = () => {
//         return (
//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>Productos</li>
//                     <li>Contacto</li>
//                     <li>Carrito</li>
//                 </ul>
//             </nav>
//         );
// }
// export default NavBar;

export const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}

// Existen dos formas de exportar un componente:
// 1. export default NavBar; - Este tipo de export nos sirve para exportar TODO el contenido de una. Puede existir un solo export default por archivo.
// 2. export const NavBar = () => {} - Este tipo de export nos sirve para exportar una parte del contenido de un archivo. Puede existir varios export const por archivo.

// Tanto el export como el export default nos permiten utilizar modulos de Javascript en cualquier parte válida de nuestro código