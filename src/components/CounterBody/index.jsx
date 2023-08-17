import React from "react";
import { useState } from "react";
import { BadgeItem } from "./BadgeItem";
import "./CounterBody.css"

const badges = [
    {
        id: 1,
        threshold: 10,
        name: 'Dog',
        image: "https://i.imgur.com/4b12RNW.png"
    },
    {
        id: 2,
        threshold: 20,
        name: 'Cat',
        image: "https://i.imgur.com/bJY5ZtU.png"
    },
    {
        id: 3,
        threshold: 30,
        name: 'Fish',
        image: "https://i.imgur.com/0xggotj.png"
    },
    {
        id: 4,
        threshold: 40,
        name: 'Bird',
        image: "https://i.imgur.com/16zyOgE.png"
    },
    {
        id: 5,
        threshold: 50,
        name: 'Hamster',
        image: "https://i.imgur.com/uuL3CGV.png"
    },
    {
        id: 6,
        threshold: 60,
        name: 'Horse',
        image: "https://i.imgur.com/8eYpDfJ.png"
    },
    {
        id: 7,
        threshold: 70,
        name: 'Turtle',
        image: "https://i.imgur.com/FTv2CHa.png"
    },
    {
        id: 8,
        threshold: 80,
        name: 'Lizard',
        image: "https://i.imgur.com/5N8yBLb.png"
    },
    {
        id:9,
        threshold: 90,
        name: 'Frog',
        image: "https://i.imgur.com/0qnu6hy.png"
    },
    {
        id: 10,
        threshold: 100,
        name: 'Dragon',
        image: "https://i.imgur.com/QOeW7Ry.png"
    },
];

const CounterBody = () => {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 10)
    };
    const resetCounter = () => {
        setCount(count = 0)
    };
    
    return (
        <main>
            <div className="counter-container">
                <button
                onClick={handleClick}
                className="add-button"
                >
                    Get points
                </button>
                
                <button
                onClick={resetCounter}
                className="reset-button"
                >
                    Reset points
                </button>
                <p className="point-display">You have <span>{count}</span> points</p>
            </div>
            <div className="badges-container">
                <h2>Pets 🐾</h2>
                <div className="badge-list">
                    {badges.map((badge) => {
                            return <BadgeItem key={badge.id} badge={badge} name={badge.name} image={badge.image} count={count}/>
                    })}
                </div>
            </div>

            {count === 100 && alert("Congrats, you've unlocked all pets 😀")}
        </main>
    )
};

export { CounterBody };