import React from "react";
import { useState } from "react";
import { BadgeItem } from "./BadgeItem";

const badgeList = [
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
        id: 1,
        threshold: 30,
        name: 'Fish',
        image: "#"
    },
    {
        id: 1,
        threshold: 40,
        name: 'Bird',
        image: "#"
    },
    {
        id: 1,
        threshold: 50,
        name: 'Hamster',
        image: "#"
    },
    {
        id: 1,
        threshold: 60,
        name: 'Horse',
        image: "#"
    },
    {
        id: 1,
        threshold: 70,
        name: 'Dog',
        image: "#"
    },
    {
        id: 1,
        threshold: 80,
        name: 'Dog',
        image: "#"
    },
    {
        id: 1,
        threshold: 90,
        name: 'Dog',
        image: "#"
    },
    {
        id: 1,
        threshold: 100,
        name: 'Dog',
        image: "#"
    },
];

const CounterBody = () => {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    };
    const resetCounter = () => {
        setCount(count = 0)
    };
    
    return (
        <main>
            <div className="counter-container">
                <p>You have clicked {count} times</p>
                <button
                onClick={handleClick}
                >Click</button>
                <button
                onClick={resetCounter}
                >Reset counter</button>
            </div>
            <div className="badges-container">
                <h2>Badges</h2>
                <p>Unlock Badges every time you reach a threshold!</p>
                
                <div className="badge-list">
                    {count >= 5 && <BadgeItem />}
                    {/* <AwardItem /> */}
                </div>
            </div>
        </main>
    )
};

export { CounterBody };