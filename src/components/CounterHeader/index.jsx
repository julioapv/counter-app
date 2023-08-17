import React from "react";
import "./CounterHeader.css"

const CounterHeader = () => {
    return (
        <header>
            <h1>Counter <span>App</span> <img src="https://i.imgur.com/IZyQw8H.png" alt="app icon" /></h1>
            <p className="header-descriptions">Use the click button to get points and unlock new pets, you can also reset your progress with the "Reset counter" button.</p>
        </header>
    )
};

export { CounterHeader };