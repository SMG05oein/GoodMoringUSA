import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import counterStores from "./stores/countStores";
import CounterBox from "./component/counterBox";

function App() {
    // const [count, setCount] = useState(0);
    const {count} = counterStores()
      return (
        <div className="App">
            <h1>count:{count}</h1>
            <CounterBox/>
        </div>
      );
}

export default App;
