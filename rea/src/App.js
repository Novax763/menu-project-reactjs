import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {add, sum, mult, devi} from './features/counter/counterSlic'

function App() {
  const [numberFirst, setNumberFirst] = useState({
    first: null, second: null,
  })
  const resultReducer = useSelector((state) => {
    return state.cal.value;
  })
  const dispatch = useDispatch()

  function handleSumClick() {
    dispatch(add({
      malFirst: numberFirst.first,
      malSecond: numberFirst.second
    }))
    // console.log("sum")
  }
  function handleSubClick() {
     dispatch(
       sum({
         malFirst: numberFirst.first,
         malSecond: numberFirst.second,
       }),
     );
    // console.log("sub")
  }
  function handlemultClick() {
     dispatch(
       mult({
         malFirst: numberFirst.first,
         malSecond: numberFirst.second,
       }),
     );
    // console.log("mult")
  }
  function handleDeviClick() {
     dispatch(
       devi({
         malFirst: numberFirst.first,
         malSecond: numberFirst.second,
       }),
     );
    // console.log("Devi")
  }
  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "teal",
        }}
      >
        <label htmlFor="">First Number</label>
        <input
          value={numberFirst.first}
          onChange={(events) => {
            setNumberFirst({ ...numberFirst, first: events.target.value });
          }}
        />
        <label htmlFor="">Second Number</label>
        <input
          value={numberFirst.second}
          onChange={(events) => {
            setNumberFirst({ ...numberFirst, second: events.target.value });
          }}
        />
        <button onClick={handleSumClick}> sum </button>
        <button onClick={handleSubClick}> subtract </button>
        <button onClick={handlemultClick}> multiply </button>
        <button onClick={handleDeviClick}> divide </button>

        <h2> {resultReducer} </h2>
      </div>
    </div>
  );
}

export default App;
