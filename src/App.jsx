import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
//  Si utilizo export called (o nombrado), debo utilizar en el import las {} y dentro debo poner estrictamente el mismo nombre con el cual exporté del otro lado (del lado del archivo)
import { Footer } from "./components/Footer.jsx";
import ProductListContainer from "./components/ProductListContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/AboutUs.jsx";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<ProductListContainer />} />
                <Route path="/perrito" element={<h2>Ruta de Perrito</h2>} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route
                    path="/category/:category"
                    element={<ProductListContainer />}
                ></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
