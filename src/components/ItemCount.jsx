import { useState } from "react";
import Button from "react-bootstrap/Button";

export const ItemCount = (props) => {
    const [count, setCount] = useState(0); // HOOKS
    // El useState es un hook que me permite guardar un estado en un componente funcional
    // El useState me devuelve un array con dos posiciones, la primera posición es el valor que quiero guardar, la segunda posición es la función que me permite modificar ese valor
    // Primera posición: value
    // Segunda posición: setter function

    const increment = () => {
        const newValue = count + 1; // Tipo Number
        // props.stok es un tipo number
        if (newValue <= props.stock) {
            setCount(newValue)
            return
        } else{ 
            alert("No hay más stock")
        }
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="d-flex justify-content-around w-30">
            <Button variant="danger" onClick={decrement}>
                -
            </Button>
            <p>{count}</p>
            <Button variant="success" onClick={increment}>
                +
            </Button>{" "}
        </div>
    );
};
