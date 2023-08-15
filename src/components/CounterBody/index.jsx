import React from "react";
import { useState } from "react";
import { BadgeItem } from "./BadgeItem";
import "./CounterBody.css"

const badges = [
    {
        id: 1,
        threshold: 10,
        name: 'Dog',
        image: "#"
    },
    {
        id: 2,
        threshold: 20,
        name: 'Cat',
        image: "#"
    },
    {
        id: 3,
        threshold: 30,
        name: 'Fish',
        image: "#"
    },
    {
        id: 4,
        threshold: 40,
        name: 'Bird',
        image: "#"
    },
    {
        id: 5,
        threshold: 50,
        name: 'Hamster',
        image: "#"
    },
    {
        id: 6,
        threshold: 60,
        name: 'Horse',
        image: "#"
    },
    {
        id: 7,
        threshold: 70,
        name: 'Turtle',
        image: "#"
    },
    {
        id: 8,
        threshold: 80,
        name: 'Lizard',
        image: "#"
    },
    {
        id:9,
        threshold: 90,
        name: 'Frog',
        image: "#"
    },
    {
        id: 10,
        threshold: 100,
        name: 'Dragon',
        image: "#"
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
                >Click</button>
                <button
                onClick={resetCounter}
                >Reset counter</button>
                <p>You have clicked {count} times</p>
            </div>
            <div className="badges-container">
                <h2>Badges</h2>
                <div className="badge-list">
                    {badges.map((badge) => {
                            return <BadgeItem key={badge.id} badge={badge} name={badge.name} image={badge.image} count={count}/>
                        // if(count >= badge.threshold) {
                        //     return <BadgeItem key={badge.id} badge={badge} name={badge.name} image={badge.image}/>
                        // }
                    })}
                </div>
            </div>
        </main>
    )
};

export { CounterBody };