import React from 'react';
import counterStores from "../stores/countStores";

const CounterBox = () => {
    const {count, increase, decrease, increaseBy} = counterStores()

    return (
        <div>
            <h2>counterBox:{count}</h2>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
            <button onClick={()=>increaseBy(10)}>10증가</button>


        </div>
    );
};

export default CounterBox;