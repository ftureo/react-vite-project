import { ItemCount } from './ItemCount.jsx'

// Esto me trae solo lo que necesito de la librería
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// Esto me trae la librería completa
// import { Button, Card, Layout, Link, Nav } from "react-bootstrap";


// Estructura de un state en React es
// const [value, setterFunction] = useState(initialValue)
// initialValue es el valor inicial que va a tener el state y puede ser de tipo: string, number, boolean, array, object, etc.



const Container = () => {
    return (
        <main>
            <h1>
                Aguante la comisión 38i que está aprendiendo React con
                componentes
            </h1>
            <ItemCount stock={10}/>
        </main>
    );
}

export default Container