import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
//  Si utilizo export called (o nombrado), debo utilizar en el import las {} y dentro debo poner estrictamente el mismo nombre con el cual exporté del otro lado (del lado del archivo)
import { Footer } from "./components/Footer.jsx";
import ProductListContainer from "./components/ProductListContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/AboutUs.jsx";
import { Contact } from "./components/Contact";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<ProductListContainer />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/category/:category" element={<ProductListContainer />} />
                <Route path="/product/:productId" element={<ProductListContainer />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
