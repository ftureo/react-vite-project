
import './App.css'
import { NavBar } from './components/NavBar.jsx';
//  Si utilizo export called (o nombrado), debo utilizar en el import las {} y dentro debo poner estrictamente el mismo nombre con el cual exporté del otro lado (del lado del archivo)
import { Footer } from './components/Footer.jsx'
import Container from './components/Container.jsx'

function App() {
    return (    
        <>
            {/* <NavBar> */}
                {/* Acá podría poner contenido (Parece)    */}
            {/* </NavBar>  */}
            {/* Utilizo una etiqueta de NavBar para poder utilizar el componente NavBar, con una de apertura y con una de cierre */}

            <NavBar />
            {/* Si no vamos a colocar contenido entre la etiqueta de apertura y de cierre, podemos utilizar una etiqueta de autocierre, es de <NombreDeComponente />
             */}
            <Container />
            <Footer />
        </>
    )
}

export default App
