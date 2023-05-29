import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { IconCart } from './IconCart.jsx'
import { ItemCount } from './ItemCount.jsx'

// Esto me trae solo lo que necesito de la librería
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// Esto me trae la librería completa
// import { Button, Card, Layout, Link, Nav } from "react-bootstrap";


// Estructura de un state en React es
// const [value, setterFunction] = useState(initialValue)
// initialValue es el valor inicial que va a tener el state y puede ser de tipo: string, number, boolean, array, object, etc.



const Container = (props) => {
    return (
        <main>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <IconCart />
            <h1>Vite + React</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR - Hot
                    Module Replacement Active!
                </p>
            </div>
            <ItemCount stock={10}/>
            <h1>
                Aguante la comisión 38i que está aprendiendo React con
                componentes
            </h1>
            <div>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <p>{props.product.stock}</p>
            </div>
        </main>
    );
}

export default Container