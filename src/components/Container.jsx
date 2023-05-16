import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
const Container = () => {
    const [count, setCount] = useState(0) // HOOKS

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
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR - Hot
                    Module Replacement Active!
                </p>
            </div>
            <h1>
                Aguante la comisión 38i que está aprendiendo React con
                componentes
            </h1>
        </main>
    );
}

export default Container