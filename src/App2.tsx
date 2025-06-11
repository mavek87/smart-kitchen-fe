import { useState } from "react";

function Child({ label }) {
    console.log("Render:", label);
    return <div>{label}</div>;
}

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
            <Child label="A" />
            <Child label="B" />
        </div>
    );
}