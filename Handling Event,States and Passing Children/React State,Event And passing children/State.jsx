import { useState } from "react";
import styles from './State.module.css';

const Reactstate = () => {
  const [count, setCount] = useState(0);
  function stateclick1() {
    setCount(count + 1);
  }
  function stateclick2() {
    setCount(count - 1);
  }

  return (
    <>
      <h4>You have clicked:{count} times</h4>
      <button onClick={stateclick1} className={`${styles.statebut} btn fw-bold`}>Increase click</button>
      <button onClick={stateclick2} className={`${styles.statebut} btn fw-bold`}>decrease Click</button>
    </>
  )
}
export default Reactstate;