import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
//  Si utilizo export called (o nombrado), debo utilizar en el import las {} y dentro debo poner estrictamente el mismo nombre con el cual exporté del otro lado (del lado del archivo)
import { Footer } from "./components/Footer.jsx";
import Container from "./components/Container.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            {/* <NavBar> */}
            {/* Acá podría poner contenido (Parece)    */}
            {/* </NavBar>  */}
            {/* Utilizo una etiqueta de NavBar para poder utilizar el componente NavBar, con una de apertura y con una de cierre */}

            {/* Si no vamos a colocar contenido entre la etiqueta de apertura y de cierre, podemos utilizar una etiqueta de autocierre, es de <NombreDeComponente />
             */}
            <NavBar messageNavbar="Soy la Navbar mostrada desde una prop" numberNavbar={8} />
            <Container
                messageContainer="Soy el container"
                product={
                    { 
                        id: 1, 
                        name: "Product 1",
                        description: "Description 1",
                        stock: 15
                    }
                }
                encendido={true}
            />
            <Footer 
                messageFooter="Soy el footer" 
                arrayFooter={
                    [
                        1,
                        2,
                        3
                    ]
            }/>
        </>
    );
}

export default App;
